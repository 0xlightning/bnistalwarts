import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Login } from './components/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />}>
      <Route path='/home' element={<App />}>
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);