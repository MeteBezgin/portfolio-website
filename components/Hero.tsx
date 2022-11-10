"use client";
import { Scrollchor } from "react-scrollchor";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <div className="mt-[20vh] flex flex-col justify-end">
      <span className="text-7xl font-monaco text-[#747fe0] before:content-['>\a0'] animate-caret">
        <Typewriter
          words={["Mete Bezgin"]}
          delaySpeed={1000}
          cursor
          cursorStyle="_"
          typeSpeed={200}
        />
        &nbsp;
      </span>

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
