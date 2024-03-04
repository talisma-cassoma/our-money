import React from 'react';
import * as ReactDOM from 'react-dom/client'
import {
  //BrowserRouter,
  createBrowserRouter,
  //Routes,
  //Route,
  RouterProvider
} from 'react-router-dom';
import { App } from './App';
import { Login } from './pages/Login';
import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path:"/our-money", element:<App/>,
  },
  {
    path:"/our-money/transactions", element:<App />,
  },
  {
    path:"/our-money/login", element:<Login />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  {/* </BrowserRouter> */}
  </React.StrictMode>
);
