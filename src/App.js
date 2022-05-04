import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Achievements from "./components/achievements/Achievements";
import Projects from "./components/projects/Projects";

import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes><Route path="/" element={<Intro />}/></Routes>
      <Routes><Route path="/about" element={<About />} /></Routes>
      <Routes><Route path="/achievements" element={<Achievements />}/></Routes>
      <Routes><Route path="/projects" element={<Projects />}/></Routes>
    </div>
  );
}

export default App;
