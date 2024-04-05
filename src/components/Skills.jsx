import { GitHubLogoIcon, FigmaLogoIcon } from '@radix-ui/react-icons'

export const Skills = () => {
    console.log("skills");
    return <>
        <div className="w-full pb-20 border-gray-100" id="skills">
            <h1 className="text-center text-white font-bold text-5xl my-5">Skills</h1>
            <div className="flex justify-around px-5 mt-10">
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Design</h2>
                    <p className="my-3">figma</p>
                    <p className="my-3">bootstrap</p>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Front-end</h2>
                    <div className="flex">
                        <GitHubLogoIcon />
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

            </div>
        </div>
    </>
}