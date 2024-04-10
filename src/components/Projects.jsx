import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 }
};

const titleVariant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
}

export const Projects = (project) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    console.log(inView);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return <div
        className="px-20"
        id="projects"

    >
        <motion.h1
            className="text-5xl text-white text-center font-bold my-10"
            ref={ref}
            variants={titleVariant}
            initial="hidden"
            animate={control}
        >Projects</motion.h1>
        <div className="flex gap-10 justify-around pb-20 px-5">
            {project.projects.map((project) => (
                <motion.div
                    className="cursor-pointer"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    key={project.title}
                    whileHover={{ scale: 1.1 }}
                >
                    <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                        <div className="text-xl font-bold">{project.title}</div>
                        <p className="my-3 text-gray-200">{project.description}</p>
                        <div className='flex'>
                            {project.stack.map(element => (
                                < div className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full flex items-center gatp-1" >
                                    {element}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))

            }

        </div>
    </div >
}