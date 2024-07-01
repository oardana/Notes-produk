import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Content from './layout/index.jsx'
import Aboutme from './layout/tentangsaya.jsx'
import Contact from './layout/kontak.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Content/>
      },
      {
        path:'/daftarproduk',
        element:<Content/>
      },
      {
        path:'/tentangsaya',
        element:<Aboutme/>
      },
      {
        path:'/kontak',
        element:<Contact/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
