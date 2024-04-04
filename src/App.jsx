import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Courses } from "./components/Courses.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return <div className="w-full min-h-screen bg-blue-950 pt-5 px-20">
    <Header></Header>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Courses></Courses>
    <Footer></Footer>
  </div>
}