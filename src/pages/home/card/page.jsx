import React, { use } from 'react';


const CardPage = ({dataPromise}) => {
    const friend = use(dataPromise);
    console.log(friend);
    return (
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
        {
            friend.map(data=>  <div data={data} key={data.id}>
            <div className="card card-border bg-base-100 text-center flex justify-center items-center p-3  space-y-1 ">
 
    <img className='rounded-full size-20   ' src={data.picture} alt="" />
    <p className='text-xl font-bold'>{data.name}</p>
    <p>{data.days_since_contact}d ago</p>
    <p className='bg-[#CBFADB] rounded-2xl  badge badge-success'>{data.tags}</p>
    <p>{data.status}</p>
    
   
 
</div>
        </div>)
        }
      </div>
    );
};

export default CardPage;