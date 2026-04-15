import React, { createContext, useState } from 'react';
export const FriendContext =createContext();

const FriendProvider = ({children}) => { 
    
     const [call,setCall]=useState([]);
    const handleCall =(currentFriend)=>{

        const isExist = call.find(data=>data.id==currentFriend.id)
        if(isExist){
            alert('is already exist')
        }else{
            setCall([...call,currentFriend])
        }
        
    }

const data ={
    handleCall ,call
}
    return <FriendContext.Provider value={data} >{children}</FriendContext.Provider>
};

export default FriendProvider;