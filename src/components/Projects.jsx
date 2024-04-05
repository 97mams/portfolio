import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Projects = () => {
    const [project, setProject] = useState([
        {
            title: "Toro-Sakafo",
            description: "Project for practice symfony 7",
            stack: ["symfony", "bootstrap", "twig"]
        },
        {
            title: "Lettre récommander",
            description: "lorem impsum dolor",
            stack: ["react", "electron", "express"]
        },
        {
            title: "Livre d'or",
            description: "systeme pour mettre l'à vie d'utilisateur",
            stack: ["php", "tailwind"]
        }
    ])

    return <div className="px-20" id="projects">
        <h1 className="text-5xl text-white text-center font-bold my-10">Projects</h1>
        <div className="flex gap-10 justify-around pb-20 px-5">
            {project.map((project) => (
                <motion.div
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                >
                    <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                        <div className="text-xl font-bold">{project.title}</div>
                        <p className="my-3 text-gray-200">{project.description}</p>
                        <div className='flex'>
                            {project.stack.map(element => (
                                < div className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full flex items-center gatp-1" >
                                    <GitHubLogoIcon />{element}
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