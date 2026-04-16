import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const FriendContext =createContext();

const FriendProvider = ({children}) => { 
    
     const [call,setCall]=useState([]);
     const [video,setVideo]=useState([]);
     const [text,setText]=useState([]);
    const handleCall =(currentFriend)=>{

        const isExist = call.find(data=>data.id==currentFriend.id)
        if(isExist){

           toast.error('Already exist')
        }else{
            toast.success('Call successful')
            setCall([...call,currentFriend])
        }
        
    }
    const handleVideo =(currentFriend)=>{

        const isExist = video.find(data=>data.id==currentFriend.id)
        if(isExist){
            toast.error('already exist')
        }else{
            toast.success('Video successful')
            setVideo([...video,currentFriend])
        }
        
    }
    const handleText =(currentFriend)=>{

        const isExist = text.find(data=>data.id==currentFriend.id)
        if(isExist){
            toast.error('already exist')
        }else{
            toast.success('Text successful')
            setText([...text,currentFriend])
        }
        
    }

const data ={
    handleCall ,call,
    handleVideo,video,
    handleText,text


}
    return <FriendContext.Provider value={data} >{children}</FriendContext.Provider>
};

export default FriendProvider;