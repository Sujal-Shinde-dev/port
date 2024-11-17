import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 className="text-5xl font-bold">Hi, I'm Sujal Shinde</h1>
      <p className="mt-4 text-xl">A Passionate Full-Stack Developer</p>
      <a
        href="#projects"
        className="mt-8 bg-white text-blue-500 px-6 py-3 rounded shadow hover:bg-gray-100 transition-all"
      >
        View My Work
      </a>
    </section>
  );
}

export default Home;
