
import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Main from './Main';
import PlayerList from './PlayerList';
import getCartsandPlayers from './getCartsandPlayers'
import Drafts from './Drafts';
import Error from './Error';
import Login from './Login';
import Signup from './Signup';
import Shipping from './Shipping';
import PrivateRoute from './Privateroute';



function App() {
  
  const router = createBrowserRouter([
    
       {
        path:'/',
        
        element:<Main></Main>,
        loader: getCartsandPlayers,
        errorElement: <Error></Error>,
        children: 
       [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/players',
          
          element:<PlayerList></PlayerList>
        },
        {
          path:'/drafts',
          element:<Drafts></Drafts>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/shipping',
          element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
       ]
       }

  ])
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
