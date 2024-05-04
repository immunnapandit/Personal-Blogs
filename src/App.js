import { createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Error from './Components/Error';
import About from './Components/About';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Memories from './Components/Memories';
import Contact from './Components/Contact';


const AppLayout = () =>{
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      }, 
      {
        path: "/aboutus",
        element: <About/>
      },
      {
        path: "/contactus",
        element: <Contact/>
      },
      {
        path: "memories",
        element: <Memories/>
      },
      
    ],
    errorElement: <Error/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;