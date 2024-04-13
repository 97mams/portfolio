import { motion } from "framer-motion"

export const Skills = () => {
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
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Design</h2>
                    <p className="my-3">figma</p>
                    <p className="my-3">bootstrap</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Front-end</h2>
                    <div className="flex">
                        <p className="my-3 text-gray-200">react</p>
                    </div>
                    <p className="my-3 text-gray-200">flutter</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Back-end</h2>
                    <p className="my-3 text-gray-200">Symfony</p>
                    <p className="my-3 text-gray-200">Node</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Other</h2>
                    <p className="my-3 text-gray-200">git & github</p>
                </div>

            </motion.div>
        </div>
    </>
}