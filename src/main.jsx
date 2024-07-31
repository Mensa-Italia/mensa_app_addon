import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import '@fontsource/roboto'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
], {
        basename: "/mensa_app_addon",
    });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}  />
  </React.StrictMode>,
)
