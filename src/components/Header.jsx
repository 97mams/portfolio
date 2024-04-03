export function Header() {
    return (
        <div className="w-full  text-white flex justify-center items-center">
            <div className="w-[400px] flex justify-between">
                <a href="#skills" className="hover:text-blue-700">
                    <samp className="text-blue-700">0. </samp>
                    Skills
                </a>
                <a href="#coures" className="hover:text-blue-700">
                    <samp className="text-blue-700">1. </samp>
                    Coures
                </a>
                <a href="#projects" className="hover:text-blue-700">
                    <samp className="text-blue-700">2. </samp>
                    Projects
                </a>
            </div>
        </div>
    )
}