import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Error from './Components/Error';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Memories from './Components/Memories';
import Contact from './Components/Contact';
import WebDevPages from './Components/Pages/WebDevPages';
import GraphicDesign from './Components/Pages/GraphicDesign';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/web-development" element={<WebDevPages />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="error" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
