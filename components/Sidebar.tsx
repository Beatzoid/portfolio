import { useTheme } from "next-themes";
import Image from "next/image";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

import avatar from "../public/avatar.png";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        console.log(theme);
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <Image
                src={avatar}
                alt="Avatar"
                width="128"
                height="128"
                placeholder="blur"
                className="mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                Beatzoid
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                Programmer | Debugger | Friend
            </p>

            {/* Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a
                    href="https://www.youtube.com/channel/UC1cx0RiAqN0dBjYICjD59Zw"
                    rel="noreferrer"
                    target="_blank"
                >
                    <AiFillYoutube className="w-8 h-8 cursor-pointer" />
                </a>
                <a
                    href="https://github.com/beatzoid"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            <button
                onClick={toggleTheme}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default Sidebar;
