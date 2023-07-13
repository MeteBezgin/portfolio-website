import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSkill: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <span className="rounded border-2 border-solid border-[#92eac0] p-2 mr-3 mb-3 font-camphor text-xs md:text-sm text-[#525f7f] ">
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
          className="mr-5 mt-5 whitespace-nowrap shadow-projectLinks hover:shadow-projectLinksHover flex items-center leading-10 py-0 px-4 rounded tracking-wide no-underline font-camphor text-xs md:text-[0.9rem] font-semibold box-border  bg-[#747fe0] text-[#fff] hover:bg-[#7795f8] hover:-translate-y-[0.1rem]"
        >
          Live Demo{" "}
          <FaExternalLinkAlt
          className="ml-[0.3rem] mb-[0.3rem]"
          />
        </a>
      )}
      {github && (
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="mr-5 mt-5 whitespace-nowrap shadow-projectLinks hover:shadow-projectLinksHover flex items-center leading-10 py-0 px-4 rounded tracking-wide no-underline font-camphor text-xs md:text-[0.9rem] font-semibold box-border text-[#fff]hover:-translate-y-[0.1rem] bg-[#fff] text-[#747fe0] hover:bg-[#fff]"
        >
          <FaGithub
            className="mr-[0.3rem] mb-[0.3rem]"
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
    <div className="flex flex-col md:flex-row justify-between items-center mb-14 bg-white rounded overflow-hidden ">
      <div className="min-w-min max-w-sm md:min-w-min md:max-w-sm p-10 ">
        <Image
          alt={title}
          src={image}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="p-4 md:p-10 w-full z-[2]">
        <h3 className=" font-medium text-3xl leading-10 text-[#525f7f] mt-0 mb-5 ">
          {title}
        </h3>
        <p
          className="mb-8 leading-[1.75rem] text-[#525f7f]"
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
