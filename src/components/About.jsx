import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, y: 10, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 0 }
};
export function About({ name, lastName, contact }) {
    const lastNameArray = lastName.split(" ")
    console.log(contact);

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return <motion.div
        className="flex min-h-screen items-center justify-around"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
    >
        <div>
            <p className="text-blue-500 mb-4">Hey ther! I'm- </p>
            <h1 className="text-blue-500 font-bold text-6xl mb-4">{name} <br /> {lastNameArray[0]} <br /> {lastNameArray[1]} </h1>
            <p className="text-white"><span className="font-bold text-xl">Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Sapiente esse.</p>
            <div className="py-3">
                {contact.map(contact => (
                    <a href="{contact.value}" key={contact.key} className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{contact.key}</a>
                ))}
            </div>
        </div>
        <div>
            <img src="./src/assets/mamisoa.jpeg" className="w-[200px] h-[200px] bg-violet-900 rounded-full" alt="" />

        </div>
    </motion.div>
}