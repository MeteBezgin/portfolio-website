import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSkill: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <span className="rounded border-2 border-solid border-[#92eac0] p-2 mr-[10px] mb-[10px] font-camphor text-sm text-[#525f7f] ">
      {skill}
    </span>
  );
};

const ProjectSkills: React.FC<{ skills: any }> = ({ skills }) => {
  return (
    <div className="flex flex-wrap">
      {skills.map((skill: any, index: number) => {
        return <ProjectSkill skill={skill} key={index} />;
      })}
    </div>
  );
};

const ProjectLinks: React.FC<{ links: any }> = ({ links }) => {
  const { github, preview } = links;
  return (
    <div className="flex justify-start items-center flex-wrap">
      {preview && (
        <a
          href={preview}
          rel="noopener noreferrer"
          target="_blank"
          className="mr-5 mt-5 whitespace-nowrap shadow-projectLinks hover:shadow-projectLinksHover flex items-center leading-10 py-0 px-[14px] rounded tracking-wide no-underline font-camphor text-[0.9em] font-semibold box-border  bg-[#747fe0] text-[#fff] hover:bg-[#7795f8] hover:translate-y-[-1px]"
        >
          Live Demo{" "}
          <FaExternalLinkAlt
            style={{
              marginLeft: "5px",
              marginBottom: "5px",
            }}
          />
        </a>
      )}
      {github && (
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="mr-5 mt-5 whitespace-nowrap shadow-projectLinks hover:shadow-projectLinksHover flex items-center leading-10 py-0 px-[14px] rounded tracking-wide no-underline font-camphor text-[0.9em] font-semibold box-border text-[#fff]hover:translate-y-[-1px] bg-[#fff] text-[#747fe0] hover:bg-[#fff]"
        >
          <FaGithub
            style={{
              marginRight: "5px",
              marginBottom: "5px",
            }}
          />{" "}
          View Source
        </a>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{
  image: any;
  title: any;
  description: any;
  skills: any;
  links: any;
}> = ({ image, title, description, skills, links }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-[60px] bg-white rounded overflow-hidden ">
      <div className=" w-[40%] p-10 ">
        <Image
          alt=""
          src={image}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className=" p-10 w-[80%] z-[2]">
        <h3 className=" font-medium text-3xl leading-[38px] text-[#525f7f] mt-0 mb-[20px] ">
          {title}
        </h3>
        <p
          className="mb-[30px] leading-[27px] text-[#525f7f]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ProjectSkills skills={skills} />
        <ProjectLinks links={links} />
      </div>
    </div>
  );
};

const Projects: React.FC<{ projects: any }> = ({ projects }) => {
  return (
    <div className="font-camphor my-0 mx-auto">
      {projects.map((proj: any) => (
        <ProjectCard
          title={proj.title}
          description={proj.description}
          skills={proj.skills}
          links={proj.links}
          image={proj.image}
          key={proj.title}
        />
      ))}
    </div>
  );
};

export default Projects;
