import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';
import { PiCaretDownBold } from 'react-icons/pi';

import '../../assets/call.png'
import '../../assets/text.png'
import '../../assets/video.png'

const TimeLines = () => {
  
    const{call ,text, video} =useContext(FriendContext);
       console.log(call ,text , video);
    return (
        <div className='bg-[#F8FAFC] '>
       <div className='mx-auto container pt-10 '>
             <p className='text-3xl font-bold py-2'>Timeline</p>
             <div className="dropdown pb-2">
  <div tabIndex={0} role="button" className="btn m-1 ">Filter timeline <PiCaretDownBold></PiCaretDownBold></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Audio</a></li>
    <li><a>Video</a></li>
    <li><a>Text</a></li>
  </ul>
</div>
      {/* card-call */}
         {
            call.map(friend=><div friend={friend} key={friend.id}>
              <div className='bg-white p-5 border border-gray-100 flex gap-4 rounded-2xl  my-3'>
                <span><img src="/src/assets/call.png" alt="" /></span>
               <div>
                 <p className='font-bold text-lg'>  Call  <span className='text-gray-500 font-normal'>with {friend.name}</span></p>
                 <p>{friend.next_due_date}</p>
               </div>
              </div>
            </div>)
         }
         {/* card-text */}
         {
            text.map(friend=><div friend={friend} key={friend.id}>
              <div className='bg-white p-5 border border-gray-100 flex gap-4 rounded-2xl  my-3'>
                <span><img src="/src/assets/text.png" alt="" /></span>
               <div>
                 <p className='font-bold text-lg'>  Text  <span className='text-gray-500 font-normal'>with {friend.name}</span></p>
                 <p>{friend.next_due_date}</p>
               </div>
              </div>
            </div>)
         }
         {
            video.map(friend=><div friend={friend} key={friend.id}>
              <div className='bg-white p-5 border border-gray-100 flex gap-4 rounded-2xl  my-3'>
                <span><img src="/src/assets/video.png" alt="" /></span>
               <div>
                 <p className='font-bold text-lg'>  Video  <span className='text-gray-500 font-normal'>with {friend.name}</span></p>
                 <p>{friend.next_due_date}</p>
               </div>
              </div>
            </div>)
         }
       </div>
        </div>
    );
};

export default TimeLines;