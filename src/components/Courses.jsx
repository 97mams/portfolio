export const Courses = () => {
    return <div className="px-20" id="courses">
        <h1 className="text-5xl text-white text-center font-bold my-10">Courses</h1>
        <div className="flex gap-10 justify-around pb-20 px-5">
            <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">Developper Web</div>
                <p className="my-3 text-gray-200">Digital Training Center (DTC)</p>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">html</a>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">css</a>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">js</a>
            </div>
            <div className=" text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">License</div>
                <p className="my-3 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita qui illo sint esse fuga labore error </p>
                <a className="border border-blue-500 font-bold py-1 px-2 rounded-full">react</a>
                <a className="border border-blue-500 font-bold py-1 px-2 rounded-full">electron</a>
                <a className="border border-blue-500 font-bold py-1 px-2 rounded-full">express</a>
            </div>
            <div className="text-white p-5 bg-blue-900 rounded-2xl">
                <div className="text-xl font-bold">DTS</div>
                <p className="my-3 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita qui illo sint esse fuga labore error </p>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">php</a>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">html</a>
                <a className="border border-blue-500 mr-3 text-gray-900 font-bold py-1 px-2 rounded-full">tailwind</a>
            </div>
        </div>
    </div>
}