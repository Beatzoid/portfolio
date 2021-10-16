import { useState } from "react";

import { projects as projectsData } from "../utils/data";
import { Category } from "../utils/types";

import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

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
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
            <nav>
                <ProjectsNavbar
                    filterCategoryHandler={filterCategory}
                    active={active}
                />
            </nav>

            <div className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
