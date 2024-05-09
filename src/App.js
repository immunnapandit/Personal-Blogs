import React, { Suspense, lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Error from './Components/Error';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Memories from './Components/Memories';
import WebDevPages from './Components/Pages/WebDevPages';
import GraphicDesign from './Components/Pages/GraphicDesign';

const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import("./Components/Contact"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/aboutus" element={
          <Suspense fallback={<div><h1>Loading....</h1></div>}>
            <About />
          </Suspense>
        } />
        <Route path="/contactus" element={
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Contact />
            </Suspense>
        } />
        <Route path="/memories" element={
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Memories />
            </Suspense>
        } />
        <Route path="/web-development" element={<WebDevPages />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
