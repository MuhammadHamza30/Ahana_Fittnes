import '../src/Css/App.css'
import Home from './pages/Home';
import About from './pages/About';
import OurClass from './pages/OurClass';
import ClassDetail from './pages/ClassDetail';
import OurTrainer from './pages/OurTrainer';
import TrainerDetail from './pages/TrainerDetail';
import OurEvent from './pages/OurEvent';
import EventDetail from './pages/EventDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

<BrowserRouter>
    <Routes>
      <Route index="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/OurClass" element={<OurClass/>} />
      <Route path="/ClassDetail" element={<ClassDetail />} />
      <Route path="/OurTrainer" element={<OurTrainer />} />
      <Route path="/TrainerDetail" element={<TrainerDetail />} />
      <Route path="/OurEvent" element={<OurEvent />} />
      <Route path="/EventDetail" element={<EventDetail />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/BlogDetail" element={<BlogDetail />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>


  )
}

export default App
