import React, { use } from 'react';
import {  useParams } from 'react-router';

const dataPromise = fetch('/card.json').then(res=>res.json());
const FriendDetail = () => {
    const {id} = useParams();
    const data = use(dataPromise)
    console.log(data)
    console.log(id)

    const friend = data.find(data=>data.id==id);
    console.log(friend)
   
    return (
        <div className='container mx-auto grid grid-cols-4 p-10'>
        {/* first card */}
         <div className="card card-border shadow-xl bg-base-100 text-center flex justify-center items-center p-3  space-y-1 row-span-2 ">
 
    <img className='rounded-full size-20   ' src={friend.picture} alt="" />
    <p className='text-xl font-bold'>{friend.name}</p>
  
    <p className='bg-[#CBFADB] rounded-2xl  badge badge-success'>{friend.tags}</p>
    <p >{friend.status}</p>
    
   
 
</div>
        </div>
    );
};

export default FriendDetail;