import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { fadeInUp, stagger } from "../utils/animations";

import { IProject } from "../utils/types";

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetails: null | number;
    setShowDetails: (id: null | number) => void;
}> = ({
    project: {
        name,
        image_path,
        id,
        description,
        deployed_url,
        github_url,
        tags
    },
    showDetails,
    setShowDetails
}) => {
    return (
        <div>
            <Image
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={() => setShowDetails(id)}
                layout="responsive"
                height="150"
                width="300"
            />
            <p className="my-2 text-center">{name}</p>

            {showDetails === id && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="border-4 border-gray-100"
                        >
                            <Image
                                src={image_path}
                                alt={name}
                                layout="responsive"
                                height="150"
                                width="300"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center my-4 space-x-3"
                        >
                            <a
                                href={github_url}
                                rel="noreferrer"
                                target="_blank"
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillGithub /> <span>Github</span>
                            </a>
                            <a
                                href={deployed_url}
                                rel="noreferrer"
                                target="_blank"
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillProject /> <span>View</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-3 font-medium text-center md:text-2xl"
                        >
                            {name}
                        </motion.h2>

                        <motion.h3
                            variants={fadeInUp}
                            className="mb-3 font-medium"
                        >
                            {description}
                        </motion.h3>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap p-2 mt-5 space-x-2 text-sm tracking-wide"
                        >
                            {tags.map((tag, i) => (
                                <span
                                    className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                                    key={i}
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <button className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
                        <MdClose
                            size={30}
                            onClick={() => setShowDetails(null)}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
