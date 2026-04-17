import React, { Suspense } from 'react';
import { FaPlus } from 'react-icons/fa';
import CardPage from './card/page';

//  const res = await fetch('card.json')
//     const data = await (res).json();
//     console.log(data,"data")
const dataPromise = fetch('/card.json').then(res=>res.json());

const Home = () => {
   
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto   py-16'>
                {/* friends sections */}
           <div className='space-y-4 text-center'>
             <h1 className='text-4xl font-bold'>
                Friends to keep close in your life
            </h1>
            <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
             <button className='btn btn-active bg-[#244D3F] text-white'><FaPlus></FaPlus> Add a Friend</button>
           </div>
           {/* card sections */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-b-2 border-[#E9E9E9] text-center '>
                <div className='bg-white py-8 rounded-2xl shadow-xl'>
                    <h1 className='font-bold text-xl tex-[#244D3F]'>10</h1>
                    <p className='text-gray-400'>Total Friends</p>
                </div>
                <div className='bg-white py-8 rounded-2xl shadow-xl'>
                    <h1 className='font-bold text-xl tex-[#244D3F]'>3</h1>
                    <p className='text-gray-400'>On Track</p>
                </div>
                <div className='bg-white py-8 rounded-2xl shadow-xl'>
                    <h1 className='font-bold text-xl tex-[#244D3F]'>6</h1>
                    <p className='text-gray-400'>Need Attention </p>
                </div>
                <div className='bg-white py-8 rounded-2xl shadow-xl'>
                    <h1 className='font-bold text-xl tex-[#244D3F]'>12</h1>
                    <p className='text-gray-400'>Interactions This Month</p>
                </div>
            </div>

            {/* Your friends all cards sections */}
            <div className='py-10 '>
                <p className='font-bold text-2xl'>Your Friends</p>
             <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner text-info w-7 h-7  "></span></div>}>
             <CardPage dataPromise={dataPromise}></CardPage>
             </Suspense>
            </div>
        </div>
        </div>
    );
};

export default Home;