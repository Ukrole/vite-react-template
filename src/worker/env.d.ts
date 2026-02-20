// Augment the Cloudflare Env with secrets
declare namespace Cloudflare {
  interface Env {
    OPENAI_API_KEY: string;
  }
}
