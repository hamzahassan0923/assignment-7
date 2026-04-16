import React, { use, useContext, } from 'react';
import { FaArchive } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuBellRing, LuMessageCircleMore } from 'react-icons/lu';
import { MdOutlineDelete, MdWifiCalling3 } from 'react-icons/md';
import {  useParams } from 'react-router';
import { FriendContext } from '../context/FriendProvider';

const dataPromise = fetch('/card.json').then(res=>res.json());
const FriendDetail = () => {
    const {id} = useParams();
    const data = use(dataPromise)
    console.log(data)
    console.log(id)
    

    const friend = data.find(data=>data.id==id);
    console.log(friend)


   const{handleCall,call,
      handleVideo,video,
    handleText,text
   } =useContext(FriendContext)
   console.log(call ,video,
     text)
   
    return (
        
        
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto grid grid-cols-4 grid-rows-3 p-10 gap-3'>
        {/* first card */}
         <div className="card card-border shadow bg-base-100 text-center flex justify-center items-center p-3  space-y-1 row-span-2 ">
 
    <img className='rounded-full size-20   ' src={friend.picture} alt="" />
    <p className='text-xl font-bold'>{friend.name}</p>
  
    <p className='bg-[#CBFADB] rounded-2xl  badge badge-success'>{friend.tags}</p>
    <div className={`badge badge-soft font-medium pb-1 rounded-3xl ${friend.status === 'overdue' ? 'bg-red-500 text-white' : friend.status === 'almost due' ? 'bg-yellow-500 text-white' : friend.status === 'on-track' ? 'bg-green-800 text-white' : ''}`}> {friend.status} </div>
    <p className='text-gray-400'>"{friend.bio}"</p>
    <p className='text-gray-400'>Preferred: email</p>
</div>
        {/* card-2 */}
         <div className='p-6 shadow text-center space-y-2.5 bg-white '>
            <p className='text-2xl font-bold'>{friend.days_since_contact}</p>
            <p className='text-gray-400'>Days Since Contact</p>
                 </div>
         <div className='p-6 shadow text-center space-y-2.5 bg-white'>
            <p className='text-2xl font-bold'>{friend.goal}</p>
            <p className='text-gray-400'>Goal (Days)</p>
                 </div>
         <div className='p-6 shadow text-center space-y-2.5 bg-white'>
            <p className='text-2xl font-bold'>{friend.next_due_date}</p>
            <p className='text-gray-400'>Next Due</p>
                 </div>
                 {/* card-3 */}
         <div className='p-6 shadow  space-y-2.5 col-span-3 flex justify-between bg-white'>
            <div>
                <p className='text-xl text-gray-600 mb-2'>Relationship Goal</p>
            <p className='text-gray-400'>Connect every <span className='font-bold text-black'>{friend.days_since_contact} days</span></p>
            </div>
            <button className='btn '>Edit</button>
                 </div>


                 {/* card-4 */}
                <div className='row-span-1 col-span-1 flex flex-col gap-2 '>
                     <div className='shadow p-3 bg-white h-12 text-center 
                      hover:backdrop-brightness-75 cursor-pointer hover:scale-105  '>
                    <p className=' font-semibold flex items-center gap-2 justify-center'><LuBellRing></LuBellRing> Snooze 2 weeks</p>
                 </div>
                     <div className='shadow p-3 bg-white h-12 text-center  hover:backdrop-brightness-75 cursor-pointer hover:scale-105'>
                    <p className=' font-semibold flex items-center gap-2 justify-center'><FaArchive></FaArchive> Archive</p>
                 </div>
                     <div className='shadow p-3 bg-white h-12 text-center  hover:backdrop-brightness-75 cursor-pointer hover:scale-105'>
                    <p className=' font-semibold text-red-600 flex items-center gap-2 justify-center'><MdOutlineDelete></MdOutlineDelete> Delete</p>
                 </div>
                </div>



                 {/* card-5 */}
                 <div className='shadow p-3  col-span-3  h-40  bg-white '>
                    <p className=' font-semibold text-gray-500 mb-2'>Quick Check-In</p>
                    <div className='grid grid-cols-3 gap-2 '>
                        <button onClick={()=>handleCall(friend)} className='btn h-20 flex flex-col text-xl'> <MdWifiCalling3></MdWifiCalling3> Call</button>
                        <button onClick={()=>handleText(friend)} className='btn h-20 flex flex-col text-xl'><LuMessageCircleMore></LuMessageCircleMore> Text</button>
                        <button onClick={()=>handleVideo(friend)} className='btn h-20 flex flex-col text-xl'><IoVideocamOutline></IoVideocamOutline> Video</button>
                    </div>
                 </div>
               
         
        </div>
        </div>
    );
};

export default FriendDetail;