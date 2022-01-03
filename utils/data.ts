import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

import { IProject, IService } from "./types";

export const services: IService[] = [
    {
        title: "Backend Development",
        about: "I can manage databases, servers, and apis using <b>Express</b>, <b>Fastify</b> & other popular frameworks",
        Icon: FaServer
    },
    {
        title: "API Development",
        about: "I can develop robust REST APIs using <b>Express</b> or <b>Fastify</b> & <b>Node.js</b> ",
        Icon: AiOutlineApi
    }
];

export const projects: IProject[] = [
    {
        id: 1,
        name: "Netflix Clone",
        description:
            "A Netflix clone made using React. Note: you cannot actually watch movies on it unfortunately",
        image_path: "/images/netflix.jpg",
        deployed_url: "https://beat-netflix-clone.vercel.app/browse",
        github_url: "https://github.com/app-clones/netflix-clone",
        category: ["react"],
        tags: ["React", "Typescript"]
    }
];
