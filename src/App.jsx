import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ansh R. Savadatti
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Creating impactful solutions at the intersection of AI, Web, and
          Society.
        </motion.p>
        <div className="flex gap-6 mt-6">
          <a href="https://github.com/AnshRiteshSavadatti" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/anshsavadatti2004" target="_blank">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:anshsavadatti@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Mini Project Intern - NVIDIA</h3>
            <p className="text-sm text-gray-400">Oct 2024 – Jan 2025</p>
            <ul className="list-disc ml-6">
              <li>
                Multimodal transformer for image difference using BDD100K + ViT
              </li>
              <li>Custom dataset with Mini-InternVL-Chat-2B-V1-5</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Minor Project Intern - NVIDIA</h3>
            <p className="text-sm text-gray-400">Jan 2025 – Present</p>
            <ul className="list-disc ml-6">
              <li>Custom demosaicing pipeline for RCCB sensor</li>
              <li>YOLOX traffic light detection on Bosch dataset</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Eventify"
            url="https://eventifydemo.netlify.app"
            tech="React, Redux, Firebase, CI/CD"
            desc="Ticket booking platform with Firebase backend and live deployment."
          />
          <ProjectCard
            title="Fast React Pizza"
            url="https://ars-fast-react-pizza.netlify.app"
            tech="React, Redux Toolkit, Tailwind"
            desc="Pizza ordering app simulating real-world delivery workflow."
          />
          <ProjectCard
            title="Movie Search App"
            url="https://ars-usepopcorn.netlify.app"
            tech="React, OMDB API"
            desc="Search and rate movies with persistent local storage."
          />
          <ProjectCard
            title="ISA Management System"
            url="https://github.com/AnshRiteshSavadatti/Team6-WebTech-SE-ISA"
            tech="React, Express, MySQL"
            desc="Full-stack tool for exam seat allocation and paper tracking."
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "C/C++",
            "Python",
            "JavaScript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MySQL",
            "MongoDB",
            "Docker",
            "TailwindCSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-4 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-8 py-12 bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>47th rank - Code Uncode 2024 (DJSCE Mumbai)</li>
          <li>500+ problems solved on LeetCode, Codeforces, CodeChef etc.</li>
          <li>Presented research at CRM 2025 (Springer published)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p>
          Email:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="mailto:anshsavadatti@gmail.com"
          >
            anshsavadatti@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="https://github.com/AnshRiteshSavadatti"
          >
            AnshRiteshSavadatti
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="https://linkedin.com/in/anshsavadatti2004"
          >
            anshsavadatti2004
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Ansh R. Savadatti — Building what matters, learning what’s next.
      </footer>
    </div>
  );
}

function ProjectCard({ title, url, tech, desc }) {
  return (
    <a
      href={url}
      target="_blank"
      className="border border-gray-300 dark:border-gray-600 p-4 rounded-xl hover:shadow-md bg-white dark:bg-gray-800"
    >
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{tech}</p>
      <p className="text-sm">{desc}</p>
    </a>
  );
}
