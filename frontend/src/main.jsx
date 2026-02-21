import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'

import Router from './routes/Router'
import './assets/css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={Router} />
  </StrictMode>,
)
