import wakeybackgrounds from "../public/wakeybackgrounds.png";
import portfolio from "../public/portfolio.png";
import truely from "../public/truely.png";
import geonode from "../public/geonode.png";
import bikerental from "../public/bikerental.png";
import wordgame from "../public/wordgame.png";
import twitterlike from "../public/twitterlike.png";

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projectsData = [
  {
    title: "Truely",
    description:
      "This is a startup project and it's goal is making the product reviews a little more truthful. It scrapes all reviews of a product off of internet and analyzes them with a machine learning algorithm then ranks them in their corresponding category. It's internal dashboard is used by 100+ users daily and has a massive custom cms. Since it's protected by NDA you can only see the scraper network that I built there on my github.",
    skills: [
      "ReactJS",
      "Typescript",
      "NestJS",
      "MongoDB",
      "ChakraUI",
      "Storybook",
      "AWS",
      "NextJS",
      "React Query",
    ],
    image: truely,
    links: {
      github: "https://github.com/MeteBezgin/Scraper-Network-for-Truely",
      preview: "https://truely.com/",
    },
  },
  {
    title: "Geonode",
    description:
      "This is a proxy service provider with an aim to democratize access to global data. It was built with proxies' most popular use cases in mind and has great customer service as well.",
    skills: [
      "ReactJS",
      "Typescript",
      "MongoDB",
      "Tailwind",
      "Storybook",
      "AWS",
      "ExpressJS",
      "React Router",
      "React Query",
    ],
    image: geonode,
    links: {
      preview: "https://geonode.com/",
    },
  },
  {
    title: "Word Game with React",
    description:
      "This is a game I created with the stack below which is played with a microphone. The rules are simple. After the computer gives you a name you should follow up with another name that starts with the last letter of the name that computer gave you. If you fail to come up with a name under the given time or say a name that was already picked or say a name that doesn't start with the last letter of the name computer gave you lose.",
    skills: [
      "ReactJS",
      "Typescript",
      "MaterialUI",
      "Webkit Speech Recognition",
    ],
    image: wordgame,
    links: {
      github: "https://github.com/MeteBezgin/Word-Game-with-React",
    },
  },
  {
    title: "Twitter-like Project",
    description:
      "This is a test project that I did for a job interview. It is a basic mockup of twitter timeline where people can post, delete, like posts and comment on them. It doesn't have authentication because they didn't need it back then so it's just the basic timeline.",
    skills: ["ReactJS", "Typescript", "ChakraUI", "MongoDB", "ExpressJS"],
    image: twitterlike,
    links: {
      github: "https://github.com/MeteBezgin/Twitter-like-Test-Project",
    },
  },
  {
    title: "Bike Rental App",
    description:
      "This is a test project I did for another job/platform interview. It is a really comprehensive web app that has authentication, authorization, CRUD operations for admins etc.",
    skills: [
      "ReactJS",
      "Typescript",
      "ExpressJS",
      "MongoDB",
      "MaterialUI",
      "React Query",
    ],
    image: bikerental,
    links: {
      github: "https://github.com/MeteBezgin/bike-rental-app",
    },
  },
  {
    title: "Portfolio",
    description:
      "This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.",
    skills: ["ReactJS", "Typescript", "Tailwind"],
    image: portfolio,
    links: {
      github: "https://github.com/MeteBezgin/portfolio-website",
      preview: "https://metebezgin.dev/",
    },
  },
];

export default projectsData;
