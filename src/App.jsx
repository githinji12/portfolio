import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

import weatherImg from "../public/weather.png";
import todoImg from "../public/todo.png";
import aiTaskImg from "../public/ai-task.png";
import sautiImg from "../public/sautiwatch.png";

function App() {
  const projects = [
    {
      title: "AI Task Manager",
      description: "Vite + React, drag & drop tasks, AI panel",
      github: "https://github.com/githinji12/ai-task-manager",
      live: "https://ai-task-manager-navy.vercel.app/",
      screenshot: aiTaskImg,
    },
    {
      title: "Weather App",
      description: "React + OpenWeatherMap API, responsive design",
      github: "https://github.com/githinji12/weather-app",
      live: "https://weather-app-self-three-55.vercel.app/",
      screenshot: weatherImg,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage, add/remove tasks",
      github: "https://github.com/githinji12/todo-app",
      live: "https://todo-app-wheat-phi-28.vercel.app/",
      screenshot: todoImg,
    },
    {
      title: "SautiWatch",
      description: "Anonymous reporting system for gender-based violence",
      github: "https://github.com/githinji12/sauti-voice-for-all",
      live: "https://sautiwatch-for-all.netlify.app/",
      screenshot: sautiImg,
    },
  ];

  return (
    <div>
      <Navbar />
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:briangithinji2022@gmail.com" target="_blank" rel="noopener noreferrer">briangithinji2022@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/254745506462" target="_blank" rel="noopener noreferrer">0745506462</a></p>
        <div style={{ marginTop: 24 }}>
  <a
    href="/Brian_Githinji_Frontend_Developer_Resume.html"
    download
    style={{
      backgroundColor: "#2563eb",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      display: "inline-block"
    }}
  >
    Download Resume
  </a>
</div>

      </section>
      <Footer />
    </div>
  );
}


export default App;
