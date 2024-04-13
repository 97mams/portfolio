import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Courses } from "./components/Courses.jsx";
import { Footer } from "./components/Footer.jsx";
import { Contact } from "./components/Contact.jsx"
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [information, setInformation] = useState([])

  useEffect(() => {
    axios
      .get("./src/local-json/data.json")
      .then(response => setInformation(response.data))
      .catch(e => console.log(e))
  }, [])

  console.log(information);

  return <div className="w-full min-h-screen bg-blue-950 pt-5 px-20 pb-28">
    {information.map(info => (
      <div>
        <Header></Header>
        <About name={info.firstname} lastName={info.lastname} contact={info.contacts} descripiton={info.description} ></About>
        <Skills></Skills>
        <Projects projects={info.projects}></Projects>
        <Courses></Courses>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    ))}

  </div>
}