import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';

const TimeLines = () => {
    const{call} =useContext(FriendContext)
       console.log(call)
    return (
        <div>
         {
            call.map(friend=><div friend={friend} key={friend.id}>
                {friend.name}
            </div>)
         }
        </div>
    );
};

export default TimeLines;