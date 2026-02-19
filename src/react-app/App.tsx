// src/App.tsx

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div style={{ position: "relative" }}>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Research />
				<Publications />
				<Projects />
				<Experience />
				<Awards />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;

