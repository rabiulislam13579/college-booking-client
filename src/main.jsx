import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Pages/LogIn/providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-blue-950 text-white'>
      <div className='max-w-7xl mx-auto'>
      <AuthProvider> 
         <RouterProvider router={router} />
      </AuthProvider>
      </div>
    </div>

  </React.StrictMode>,
)
