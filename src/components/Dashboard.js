import React from 'react';

const Dashboard = () => {
  return (
    <div className='relative flex justify-center items-center w-full'>
        <div className={`bg-red-500 rounded-[10px] position-fixed text-white h-[630px] w-[90%] drop-shadow-xl flex flex-col items-center justify-center items-center gap-[20px] `}>
            <div className="w-[80%] h-[100px] text-black rounded-[15px] leading-10 drop-shadow-xl bg-white flex flex-col justify-center items-left pl-[20px] pb-[20px]">
                <p>Amount Received</p>
                <h1 className='text-[3rem]'>50,400</h1>
            </div>
            <div className="w-[80%] h-[100px] text-black rounded-[15px] leading-10 drop-shadow-xl bg-white flex flex-col justify-center items-left pl-[20px] pb-[20px]">
                <p>Amount Pending</p>
                <h1 className='text-[3rem]'>37,000</h1>
            </div>
            <div className="w-[80%] h-[100px] text-black rounded-[15px] leading-10 drop-shadow-xl bg-white flex flex-col justify-center items-left pl-[20px] pb-[20px]">
                <p>Kitty Fund</p>
                <h1 className='text-[3rem]'>14,500</h1>
            </div>
            <div className="w-[80%] h-[120px]  text-black rounded-[15px] drop-shadow-xl bg-white flex flex-col justify-center items-left pl-[20px] ">
                <p className='font-medium text-[1.2rem] pb-[5px]'>Payment Mode</p>
                <p>CASH : 45,000 </p>
                <p>UPI : - </p>
                <p>FIN CLOUD : 38,000</p>
            </div>
            <div className='flex gap-[25px] w-[90%] justify-center'>
                <div className='flex flex-col items-center'>
                    <p>Visitor</p>
                    <h1 className='text-5xl'>30</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p>Observer</p>
                    <h1 className='text-5xl'>03</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p>Wrapdoor</p>
                    <h1 className='text-5xl'>45</h1>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;