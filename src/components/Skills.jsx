export const Skills = () => {
    return <>
        <div className="w-full pb-20 border-gray-100" id="skills">
            <h1 className="text-center text-white font-bold text-5xl my-5">Skills</h1>
            <div className="flex justify-around px-5 mt-10">
                <div className="text-white">
                    <h2 className="text-3xl">Design</h2>
                    <p className="my-3">figma</p>
                    <p className="my-3">bootstrap</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl">Front-end</h2>
                    <p className="my-3">react</p>
                    <p className="my-3">flutter</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl">Back-end</h2>
                    <p className="my-3">Symfony</p>
                    <p className="my-3">Node</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl">Other</h2>
                    <p className="my-3">git & github</p>
                </div>

            </div>
        </div>
    </>
}