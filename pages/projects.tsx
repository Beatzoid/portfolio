import { motion } from "framer-motion";
import { useState } from "react";

import { projects as projectsData } from "../utils/data";
import { Category } from "../utils/types";
import { fadeInUp, routeAnimation, stagger } from "../utils/animations";

import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const [showDetails, setShowDetails] = useState<number | null>(null);

    const filterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newData = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newData);
        setActive(category);
    };

    return (
        <motion.div
            className="px-5 py-2 overflow-y-scroll"
            style={{ height: "65vh" }}
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <nav>
                <ProjectsNavbar
                    filterCategoryHandler={filterCategory}
                    active={active}
                />
            </nav>

            <motion.div
                className="relative grid grid-cols-12 gap-4 my-3"
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                    >
                        <ProjectCard
                            project={project}
                            showDetails={showDetails}
                            setShowDetails={setShowDetails}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
