export function Header({ profil }) {
    console.log(profil);
    return (
        <div className="w-full  text-white flex justify-around items-center">
            <img src={"./src/assets/" + profil} className="h-10 w-10 rounded-full" alt="mamisoa" />
            <div className="w-[400px] flex justify-between">
                <a
                    href="#skills"
                    className="hover:text-blue-700"
                >
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