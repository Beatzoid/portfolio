import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaDiscord } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { IService } from "./types";

export const services: IService[] = [
    {
        title: "Frontend Development",
        about: "I can build a beautiful and scalable frontend using <b>HTML</b>,<b>CSS</b> and <b>React.js</b> ",
        Icon: RiComputerLine
    },
    {
        title: "Backend Development",
        about: "I can manage databases, servers, and apis using <b>Express</b>, <b>Fastify</b> & other popular frameworks",
        Icon: FaServer
    },
    {
        title: "API Development",
        about: "I can develop robust REST APIs using <b>Express</b> or <b>Fastify</b> & <b>Node.js</b> ",
        Icon: AiOutlineApi
    },
    {
        title: "Discord Bot Development",
        about: "I can develop stunning Discord bots using <b>discord.js</b>",
        Icon: FaDiscord
    }
];
