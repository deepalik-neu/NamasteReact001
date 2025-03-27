import { createBrowserRouter, Outlet} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Body from './Body';
import Header from './Header';
import Error from './Error';
import RestaurantMenu from './RestaurantMenu';

import { lazy, Suspense } from 'react';


const AppLayout = ()=>{
    return (
        <div>
              <Header/>
              <Outlet/>
        </div>
    )
}

const Grocery = lazy(()=>import("./Grocery"))

const router = createBrowserRouter([
  {
    path: '/',
    element:<AppLayout/>,
    children:[
        {
            path: '/',
            element: <Body />,
          },
        {
            path: '/about',
            element: <About />,
          },
          {
            path: '/contact',
            element: <Contact />,
          },
          {
            path: '/restaurant/:resID',
            element: <RestaurantMenu />,
          },
          {
            path: '/grocery',
            element: <Suspense fallback={<h2>this is fall back!</h2>}><Grocery /></Suspense>,
          },
    ],
    errorElement: <Error/>
  },
  
]);

export default router;
