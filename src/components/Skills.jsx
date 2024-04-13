import { motion } from "framer-motion"

export const Skills = ({ skills }) => {
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
                {skills.map((skill) => (
                    <div className="text-white">
                        <h2 className="text-3xl font-bold">{skill.title}</h2>
                        {skill.contents.map((contents) => (
                            <p className="my-3">{contents}</p>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    </>
}
