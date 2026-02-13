import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {}
    ],  
  }
])


export default Router