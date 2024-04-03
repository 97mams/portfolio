export const About = () => {
    return <div className="flex min-h-screen items-center justify-around">
        <div>
            <p className="text-blue-500 mb-4">Hey ther! I'm- </p>
            <h1 className="text-blue-500 font-bold text-5xl mb-4">RATSIMBARISON <br /> ANJANAINA MAMISOA</h1>
            <p className="text-white"><span className="font-bold text-xl">Lorem ipsum dolor sit</span>, amet consectetur adipisicing elit. Sapiente esse.</p>
            <div className="py-3">
                <a href="" className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">GitHub</a>
                <a href="" className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Email</a>
                <a href="" className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Facebook</a>
            </div>
        </div>
        <img src="./src/assets/react.svg" className="w-[200px] bg-gray-800 rounded-full" alt="" />
    </div>
}