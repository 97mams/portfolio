import { motion } from "framer-motion"
import { useState } from "react"
import { FaReact, FaSymfony, FaBootstrap, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa"

const skill = [
    {
        name: "Degin",
        value: [{
            key: 1,
            title: "figma",
            icon: <FaFigma />
        },
        {
            key: 2,
            title: "bootstrap",
            icon: <FaBootstrap />
        }]
    },
    {
        name: "Front-end",
        value: [{
            key: 3,
            title: "react",
            icon: <FaReact />
        }]
    },
    {
        name: "Back-end",
        value: [{
            key: 5,
            title: "symfony",
            icon: <FaSymfony />
        },
        {
            key: 6,
            title: "nodejs",
            icon: <FaNodeJs />
        }]
    },
    {
        name: "Other",
        value: [
            {
                key: 7,
                title: "git & gitHub",
                icon: <FaGithub />
            }]
    }
]

export const Skills = ({ skills }) => {
    const [icon, setIcon] = useState(skill)

    console.log(icon);
    return <>
        <div className="w-full h-50 mt-20 flex items-center justify-center flex-col border-gray-100" id="skills">
            <motion.h1
                className="text-center text-white font-bold text-5xl my-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            >Skills</motion.h1>
            <motion.div
                className="w-full flex justify-around pb-5"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            >
                {icon.map((skill) => (
                    <div className="text-white" key={skill.name} >
                        <h2 className="text-3xl font-bold">{skill.name}</h2>
                        {skill.value.map((contents) => (
                            <div className="flex items-center gap-2 text-gray-200 text-bold" key={contents.key}>
                                {contents.icon}
                                <p className="my-3">{contents.title}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div >
        </div >
    </>
}
