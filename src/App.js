import { createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Error from './Components/Error';
import About from './Components/About';
import { Suspense } from 'react';
import Body from './Components/Body';

const AppLayout = () =>{
  return (
    <div className="App">
      <Header/>
      <Outlet/>
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
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        )
      }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;
