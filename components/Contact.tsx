import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="font-camphor text-xl text-center mt-[80px] pb-[200px] ml-10 flex justify-center">
      <span className=" after:content-['||'] after:text-[#525f7f] after:mx-[30px]">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:metebezgin@gmail.com"
          className="relative no-underline text-[#5a5d7a] after:block after:absolute after:left-0 after:bottom-[-30px] after:w-0 after:h-2 after:bg-[#747fe0] after:content-[''] after:transition-width hover:text-[#7795f8] hover:after:w-full"
        >
          metebezgin@gmail.com
        </a>
      </span>
      <span className=" after:content-['||'] after:text-[#525f7f] after:mx-[30px]">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mete-bezgin/"
          className="relative no-underline text-[#5a5d7a] after:block after:absolute after:left-0 after:bottom-[-30px] after:w-0 after:h-2 after:bg-[#747fe0] after:content-[''] after:transition-width hover:text-[#7795f8] hover:after:w-full"
        >
          linkedin
        </a>
      </span>
      <span className="after:text-[#525f7f] after:mx-[30px] after:content-[''] after:m-0">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/MeteBezgin"
          className="relative no-underline text-[#5a5d7a] after:block after:absolute after:left-0 after:bottom-[-30px] after:w-0 after:h-2 after:bg-[#747fe0] after:content-[''] after:transition-width hover:text-[#7795f8] hover:after:w-full"
        >
          github
        </a>
      </span>
    </div>
  );
};

export default Contact;
