import { motion } from "framer-motion";

export const Projects = (project) => {

    return <div
        className="px-20 w-full mt-20 h-70 flex flex-col items-center justify-center"
        id="projects"
    >
        <motion.h1
            className="text-5xl text-white text-center font-bold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        >Projects</motion.h1>
        <div className="flex gap-10 justify-around px-5">
            {project.projects.map((project) => (
                <motion.a
                    target="_blank"
                    className="cursor-pointer"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0, transition: { duration: 0.5 } }}
                    whileHover={{ scale: 1.1 }}
                    key={project.title}
                    href={project.link}
                >
                    <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                        <div className="text-xl font-bold">{project.title}</div>
                        <p className="my-3 text-gray-200">{project.description}</p>
                        <div className='flex'>
                            {project.stack.map(element => (
                                < div key={element} className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full flex items-center gatp-1" >
                                    {element}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.a>
            ))

            }

        </div>
    </div >
}