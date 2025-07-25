import React from 'react';

const AppBanner = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">
        Hi, I'm Mahendra Poopathi S 👋
      </h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
        Java Developer | Full-Stack Developer | AI & Sustainability Projects
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
        I build responsive, scalable web apps and solve real-world problems through Java, Spring Boot, React,
        and AI-powered solutions. Currently exploring sustainability tech and voice-to-handwriting systems.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default AppBanner;
