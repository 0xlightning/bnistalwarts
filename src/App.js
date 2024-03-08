import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from './components/index';

function App() {
  return (
    <div className='flex gap-[20px]'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
