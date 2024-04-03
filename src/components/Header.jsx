export function Header() {
    return (
        <div className="w-full  text-white flex justify-center items-center">
            <div className="w-[400px] flex justify-between">
                <a href="#skills" className="hover:text-blue-700">
                    <samp className="text-blue-400">0. </samp>
                    Skills
                </a>
                <a href="#projects" className="hover:text-blue-700">
                    <samp className="text-blue-400">1. </samp>
                    Projects
                </a>
                <a href="#courses" className="hover:text-blue-700">
                    <samp className="text-blue-400">2. </samp>
                    Courses
                </a>
            </div>
        </div>
    )
}   