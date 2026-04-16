import React, { use } from 'react';
import { Link } from 'react-router';


const CardPage = ({dataPromise}) => {
    const friend = use(dataPromise);
    console.log(friend);
    return (
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {
            friend.map(data=> 
             <Link to={`/friend/${data.id}`} data={data} key={data.id}>
            <div className="card card-border bg-base-100 text-center flex justify-center items-center p-3  space-y-1 ">
 
    <img className='rounded-full size-20   ' src={data.picture} alt="" />
    <p className='text-xl font-bold'>{data.name}</p>
    <p>{data.days_since_contact}d ago</p>
    <p className='bg-[#CBFADB] rounded-2xl  badge badge-success'>{data.tags}</p>
   <div className=
   {`badge badge-soft font-medium pb-1 rounded-3xl ${data.status === 'overdue' ? 'bg-red-500 text-white' : data.status === 'almost due' ? 'bg-yellow-500 text-white' : 
   data.status === 'on-track' ? 'bg-green-800 text-white' : ''}`}>
     {data.status} </div>
    
   
 
</div>
        </Link>)
        }
      </div>
    );
};

export default CardPage;