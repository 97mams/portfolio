import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";

export default function App() {
  return <div className="w-full min-h-screen bg-blue-900 pt-5">
    <Header></Header>
    <About></About>
    <Skills></Skills>
  </div>
}