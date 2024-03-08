import React, { useState } from 'react'
import { Switcher } from './Switcher';
import Dashboard from './Dashboard';

function Home() {
  
  return (
    <div className='flex w-full'>
        <Switcher/>
        <Dashboard/>
    </div>
  );
}

export default Home