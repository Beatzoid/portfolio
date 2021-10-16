import React, { FunctionComponent } from "react";
import { Category } from "../utils/types";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    filterCategoryHandler: Function;
    active: string;
}> = ({ value, filterCategoryHandler, active }) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if (active === value) className += " text-green";

    return (
        <li className={className} onClick={() => filterCategoryHandler(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{
    filterCategoryHandler: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            {/* <NavItem value="express" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="node" {...props} /> */}
            <NavItem value="react" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
