// import React, { useState } from 'react';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="mx-auto h-screen flex items-center justify-center">
      <div className="bg-gray-100 h-full w-full flex relative">

        {/* Left side */}
        <div className="w-3/5 bg-[#FF3131] p-10 relative z-10">
          <h1 className="text-4xl text-white font-bold text-center pt-10 ">BNI <br /> STALWARTS</h1>
        </div>

        {/* Curved divider */}
        <div className="absolute inset-y-0 left-[60%] w-[40%] h-full overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 100 0 Q 50 100 0 0 Z"
              fill="#FF3131"
            />
          </svg>
        </div>

        {/* Right side */}
        <div className="w-2/5 bg-white p-10 relative z-10" > 
          <h2 className="text-3xl text-center font-bold pt-10">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-10 items-center"> 
              <div>
              <label htmlFor="email" className="block text-[#4D5959] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[400px] px-4 py-2 border rounded-md focus:border-[#FA0000] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[#4D5959]  mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
                className="w-[400px] px-4 py-2 border rounded-md focus:border-[#FA0000] focus:outline-none"
              />
            </div>
            <button type="submit" className="w-[400px] bg-[#FA0000] text-white px-4 py-2 rounded-md font-bold">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
