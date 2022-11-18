import React, { useEffect, useState } from "react";

const TypewriterTest: React.FC<{
  textProp: string;
  minTypeSpeed: number;
  maxTypeSpeed: number;
  initDelay: number;
}> = ({ textProp, maxTypeSpeed, minTypeSpeed, initDelay }) => {
  const [text, setText] = useState("");

  const clicketyClack = (
    textProp: string,
    minTypeSpeed: number,
    maxTypeSpeed: number,
    initDelay: number
  ) => {
    let str = "";
    let typeSpeed = 0;

    textProp.split("").forEach((c) => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        setText(str);
      }, initDelay + typeSpeed);
    });
  };

  useEffect(() => {
    clicketyClack(textProp, minTypeSpeed, maxTypeSpeed, initDelay);
    setInterval(() => {
      clicketyClack(textProp, minTypeSpeed, maxTypeSpeed, initDelay);
    }, 10000);
  }, [initDelay, maxTypeSpeed, minTypeSpeed, textProp]);

  return (
    <div className="text-7xl font-monaco text-[#747fe0] before:content-['>\a0']">
      {text}
      <span className="bg-[#747fe0]/60 animate-caret">&nbsp;</span>
    </div>
  );
};

export default TypewriterTest;
