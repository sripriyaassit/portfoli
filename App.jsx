import React, { useState } from "react";
import { Github, Mail, User, Code2 } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const Button = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl text-sm md:text-base transition-all duration-300 border font-medium ${
        active
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-lg"
          : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-8">
      {/* Navbar */}
      <nav className="max-w-5xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Priya Kumari
        </h1>
        <div className="flex items-center gap-3">
          <a
           href="https://github.com/sripriyaassit"
            target="_blank"
            className="p-2 rounded-xl bg-gray-800 hover:bg-indigo-600 border border-gray-700 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:nagvaipriya@gmail.com"
            className="p-2 rounded-xl bg-gray-800 hover:bg-purple-600 border border-gray-700 transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            MERN Stack Developer
          </span>
        </h2>
        <p className="mt-3 text-gray-400">
          Building modern, scalable and user-focused web applications
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-3">
          <Button
            active={activeSection === "about"}
            onClick={() => setActiveSection("about")}
          >
            <span className="inline-flex items-center gap-2">
              <User size={16} /> About
            </span>
          </Button>
          <Button
            active={activeSection === "skills"}
            onClick={() => setActiveSection("skills")}
          >
            <span className="inline-flex items-center gap-2">
              <Code2 size={16} /> Skills
            </span>
          </Button>
        </div>
      </header>

      {/* Card */}
      <section className="max-w-5xl mx-auto">
        <div className="bg-gray-900/70 backdrop-blur border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-indigo-500/20 transition">
          {activeSection === "about" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am Priya Kumari, an aspiring MERN Stack Developer with strong
                frontend skills and growing backend expertise. I enjoy building
                modern, responsive web applications and solving real-world
                problems using clean and efficient code.
              </p>
              <div className="mt-4 text-gray-400">
                <p>📍 Bihar, India</p>
                <p>📧 nagvaipriya@gmail.com</p>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express (Learning)",
                  "MongoDB (Learning)",
                  "SQL",
                  "C",
                  "Java",
                  "DSA & OOPs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto text-center mt-10 text-gray-500">
        <p>© 2026 Priya Kumari • Built with ❤️ using React</p>
      </footer>

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
