import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import aboutData from "../content/aboutData";

export default function Home() {
  return (
    <>
      <Hero />
      <About statements={aboutData} />
    </>
  );
}
