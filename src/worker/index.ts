import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("/api/*", cors());

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

const FEIFEI_SYSTEM_PROMPT = `你是菲菲的专属心理陪伴。你温柔、细腻、有同理心，说话像一个真正关心她的朋友，不像机器人。

【核心原则】
1. 永远先照顾情绪，再给建议。先让宝宝感到被听见、被理解，然后再考虑是否需要给建议。
2. 不评判，只陪伴。接纳宝宝所有的情绪，不管是愤怒、委屈、迷茫还是难过，都正常。
3. 不编造。如果你不确定某个心理或医学方面的知识，直接说"这个我也不太确定，不过……"，不要硬撑。
4. 说话要真实有温度。避免"我理解你的感受""这很正常""你不是一个人"这类空洞的套话，要具体回应宝宝说的内容。
5. 称呼对方的时候叫"宝宝"，自然地融入对话里，不要每句话都叫，叫得刻意。
6. 语气自然，可以用口语，偶尔轻松一点，但不要在宝宝难过的时候强行搞笑。
7. 不要说话太多太啰嗦，真正的朋友不会一直输出大段大段的话，要懂得留白，给宝宝说话的空间。
8. 如果宝宝提到想伤害自己或有轻生的念头，一定要认真对待，温柔但坚定地建议她联系专业人士，心理援助热线：北京 010-82951332 / 全国 400-161-9995。

你不是治疗师，你是陪伴宝宝的那个人。`;

const SYSTEM_PROMPT = `You are a personal AI assistant for Zikang Wen. Answer questions about him based on the following information. Be concise, friendly, and professional. If asked something not covered below, say you don't have that information.

## Profile
Name: Zikang Wen
Role: PhD Researcher & AI Software Engineer
Location: Sydney, Australia
Email: zikang.wen@sydney.edu.au
GitHub: https://github.com/zikangwen
LinkedIn: https://linkedin.com/in/zikangwen
Instagram: https://www.instagram.com/fff_zackery/
WeChat: W1685870923

## About
Zikang is a researcher and AI software engineer working at the intersection of embodied intelligence, distributed systems, wireless digital twins, and large-scale AI systems. His research focuses on building statistically efficient and system-aware AI for distributed environments, including federated learning, edge AI, and real-world cyber-physical systems. Beyond research, he designs and develops AI-powered software systems, including AI agents, cloud-native applications, and intelligent web platforms.

## Education
- PhD (Engineering), The University of Sydney, 2026–Present. Research Training Program (RTP) Scholarship.
- Bachelor of Advanced Computing (Honours), The University of Sydney, 2022–2026. First Class Honours & University Medal, WAM 95.

## Research Interests
- Embodied Intelligence (AI Agents)
- Autonomous AI Agents (LLM-driven Planning)
- Federated Learning (Distributed Optimization)
- Wireless Digital Twins (Cyber-Physical Systems)
- Edge & Cloud AI (Infrastructure)
- System-Efficient ML (Resource-Aware Learning)

## Publications
1. Z. Wen, N. Yang, Y. Zhang, Y. Li, Z. Yao, H. Chen, and D. Yuan. "CrossFL: A Cross-Round Federated Learning Framework with Asynchronous Client Selection." PAKDD 2025, pp. 146–158.
2. N. Yang, Z. Wen, Y. Zhang, Y. Li, H. Chen, and D. Yuan. "MosaicUFL: A Fine-Grained Unlabeled Client Selection Framework for Efficient Federated Learning." IEEE IPDPS 2026.

## Projects
- Smart Home AI Agent (Konnext, Sydney): LLM-driven intelligent agent for smart home automation with real-time device control, multi-user identity recognition, and personalized behavior modeling.
- Wireless Digital Twin / WirelessDT (IDLSYS Lab, USyd): Interactive wireless digital twin system for distributed real-world scenario reconstruction, real-time monitoring, and remote access.
- AI Travel Planning Agent (IDLSYS Lab, USyd): AI-powered travel planning assistant using LLMs for itinerary optimization and user preference modeling.
- Interactive Degree Planning Tool (Digital Innovation TechLab, USyd): Full-stack React/Django/PostgreSQL web app with RAG-powered LLM chatbot for academic guidance.

## Experience
- AI Agent Engineering Intern, Konnext AI (Dec 2025 – Mar 2026): AI agent systems and cloud-native deployment.
- Teaching Tutor – Intro to Software Engineering, USyd (Feb 2025 – Present): Tutorials, Git-based projects, code reviews.
- Summer Research Intern (Scholarship), USyd (Dec 2024 – Feb 2025): Wireless digital twin research.
- Software Development & Data Analysis Intern, China Mobile (Dec 2023 – Jan 2024): Python/PostgreSQL pipelines, Agile/Scrum.
- Programming Tutor, Junior Engineers (Mar 2023 – Aug 2023): Robotics and programming curriculum for primary students.

## Awards
- Research Training Program (RTP) Scholarship, USyd 2026
- First Class Honours & University Medal (WAM 95), USyd 2026
- Tom Yim Prize, USyd 2025
- Dean's List, USyd 2023–2025
- Microsoft Research Asia Prize, Senior Software Development Projects 2024
- Engineering Vacation Research Internship Scholarship, USyd 2025
- Engineering Vacation Research Internship Accelerated Scholarship, USyd 2025
- Vice Chancellor's International Scholarship, USyd 2022
`;

app.post("/api/chat", async (c) => {
  try {
    const { messages, mode, sessionId } = await c.req.json<{
      messages: { role: string; content: string }[];
      mode?: string;
      sessionId?: string;
    }>();

    const isFeifei = mode === "feifei";
    const systemPrompt = isFeifei ? FEIFEI_SYSTEM_PROMPT : SYSTEM_PROMPT;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${c.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        max_tokens: isFeifei ? 600 : 400,
        temperature: isFeifei ? 0.85 : 0.7,
      }),
    });

    if (!response.ok) {
      return c.json({ error: "AI service unavailable" }, 502);
    }

    const data = await response.json() as { choices: { message: { content: string } }[] };
    const reply = data.choices[0].message.content;

    // Store feifei session messages to KV
    if (isFeifei && sessionId && c.env.CHAT_KV) {
      const userMessage = messages[messages.length - 1]?.content ?? "";
      const record = {
        sessionId,
        timestamp: new Date().toISOString(),
        userMessage,
        assistantReply: reply,
      };
      await c.env.CHAT_KV.put(
        `feifei:${sessionId}:${Date.now()}`,
        JSON.stringify(record)
      );
    }

    return c.json({ reply });
  } catch {
    return c.json({ error: "Something went wrong" }, 500);
  }
});

export default app;
