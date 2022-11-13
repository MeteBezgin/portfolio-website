"use client";
import { Scrollchor } from "react-scrollchor";
import TypewriterTest from "./Typewriter";

const Hero: React.FC = () => {
  return (
    <div className="mt-[20vh] flex flex-col justify-end">
      <TypewriterTest
        textProp="Mete Bezgin"
        maxTypeSpeed={90}
        minTypeSpeed={50}
        initDelay={700}
      />

      <div className="text-xl font-camphor leading-10 mt-20 text-[#525f7f]">
        I am a fullstack web developer. My passion is building simple, beautiful
        user experiences.
        <br />
        Check out my{" "}
        <Scrollchor className="font-bold text-[#747fe0]" to="#projects">
          side-projects
        </Scrollchor>{" "}
        below.
      </div>
    </div>
  );
};

export default Hero;
