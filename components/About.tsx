import React from "react";

const About: React.FC<{ statements: any }> = ({ statements }) => {
  return (
    <div className="mt-[10vh] ">
      <div>
        <div className="h-7 bg-[#e4e3e5] rounded-t-[10px] rounded-b-none flex justify-start items-center">
          <div className="w-3 h-3 rounded-full ml-[9px] bg-[#f96256] border-solid border border-[#f65549]" />
          <div className="w-3 h-3 rounded-full ml-[9px] border-solid border bg-[#fdbc3d] border-[#ffb524]" />
          <div className="w-3 h-3 rounded-full ml-[9px] border-solid border bg-[#33c948] border-[#2dbb41]" />
        </div>
        <div className="bg-[#5a5d7a] rounded-b-[4px] shadow-custom font-monaco ">
          <Statements statements={statements} />
        </div>
      </div>
    </div>
  );
};

const Statements: React.FC<{ statements: any }> = ({ statements }) => {
  return (
    <div>
      {statements.map((statement: any, index: number) => {
        return <Statement statement={statement} key={index} />;
      })}
      <div className="first:pt-[35px] last:pb-[60px] mb-[25px] ml-[35px] mr-[35px] leading-6">
        <div className="text-[#f7f7f7] before:content-['>\a0']">
          <span className="bg-white animate-caret">&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

const Statement: React.FC<{ statement: any }> = ({ statement }) => {
  return (
    <div className="first:pt-[35px] last:pb-[60px] mb-[25px] ml-[35px] mr-[35px] leading-6">
      <div className="text-[#f7f7f7] before:content-['>\a0']">
        {statement.input}
      </div>
      <div
        className="text-[#e7d184] [&>a]:text-[#35feff]"
        dangerouslySetInnerHTML={{ __html: statement.return }}
      />
    </div>
  );
};

export default About;
