import { motion } from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, y: 10, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 0 }
};
export function About({ name, lastName, contact, descripiton }) {

    const lastNameArray = lastName.split(" ")

    return <motion.div
        className="flex min-h-screen items-center justify-around"
        initial="hidden"
        animate={boxVariant}
        whileInView="visible"
    >
        <div className="px-20  bg-[url('./assets/29726227_7601783.svg')] bg-contain">

            <p className="text-blue-500 ">Hey ther! I'm- </p>
            <h1 className="text-blue-500 font-bold text-6xl mb-4">{name} <br /> {lastNameArray[0]} <br /> {lastNameArray[1]} </h1>
            <p className="text-white text-xl">{descripiton}</p>
            <div className="py-3">
                {contact.map(contact => (
                    <a
                        target="_blank"
                        href={contact.value}
                        key={contact.key}
                        className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >{contact.key}</a>
                ))}
            </div>
        </div>
        <div>
            <img src="./src/assets/mamisoa.jpeg" className="w-[200px] h-[200px] bg-violet-900 rounded-full" alt="" />

        </div>
    </motion.div>
}