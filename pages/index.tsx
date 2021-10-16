import { services } from "../utils/data";

import ServiceCard from "../components/ServiceCard";

const index = () => {
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
            <h5 className="my-3 font-medium">
                I am a developer and innovator who loves everything computers. I
                started at the age of 9 and every since I have never stopped.
                The main reason I love doing it is that you really have no
                limits on what you can create, other than your imagination
            </h5>
            <div
                className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-bold tracking-wide">
                    My Skills
                </h6>
                <div className="grid gap-6 lg:grid-cols-2 ">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default index;
