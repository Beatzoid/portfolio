import { IconType } from "react-icons/lib";

export interface IService {
    title: string;
    about: string;
    Icon: IconType;
}

export interface IProject {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    tags: string[];
}

export type Category = "react" | "node" | "express" | "mongo";
