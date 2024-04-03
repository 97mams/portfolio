export const Courses = () => {
    return <div className="px-20" id="courses">
        <h1 className="text-5xl text-white text-center font-bold my-10">Courses</h1>
        <div className="flex gap-10 justify-around pb-20 px-5">
            <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">Toro-Sakafo</div>
                <p className="my-3 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita qui illo sint esse fuga labore error </p>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">symfony</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">Mysql</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">Twig</a>
            </div>
            <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">Lettre récommander</div>
                <p className="my-3 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita qui illo sint esse fuga labore error </p>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">react</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">electron</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">express</a>
            </div>
            <div className="text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">Livre d'or</div>
                <p className="my-3 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita qui illo sint esse fuga labore error </p>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">php</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">html</a>
                <a className="bg-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">tailwind</a>
            </div>
        </div>
    </div>
}