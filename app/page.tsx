import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import aboutData from "../content/aboutData";
import projectsData from "../content/projectsData";

export default function Home() {
  return (
    <>
      <Hero />
      <About statements={aboutData} />
      <h2
        id="projects"
        className="font-medium text-center pt-12 mt-12 mb-20 text-[#525f7f] text-2xl font-camphor after:content-[' '] after:border-4 after:border-solid after:border-[#747fe0] after:block after:mt-[30px] after:w-[50px] after:my-0 after:mx-auto"
      >
        Projects
      </h2>
      <Projects projects={projectsData} />
      <h2
        id="contacts"
        className="font-medium text-center pt-12 mt-12 mb-20 text-[#525f7f] text-2xl font-camphor after:content-[' '] after:border-4 after:border-solid after:border-[#747fe0] after:block after:mt-[30px] after:w-[50px] after:my-0 after:mx-auto"
      >
        Contacts
      </h2>
      <Contact />
    </>
  );
}
