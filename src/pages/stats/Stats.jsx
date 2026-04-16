import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendProvider';

const Stats = () => {

 const{call ,text, video} =useContext(FriendContext);
    const data = [
  { name: 'Text', value: text.length, fill: '#7E35E1' },
  { name: 'Call', value:call.length , fill: '#244D3F' },
  { name: 'Video', value: video.length, fill: '  #37A163' },
  
];
    return (
    <div className='bg-[#F8FAFC]'>
        <p className='text-5xl font-bold ml-25 pt-8 pb-8'>Friendship Analytics</p>
        <div className='container mx-auto bg-white  '>
<p className='font-semibold text-lg p-2 ml-4'>By Interaction Type</p>
             <PieChart className='flex justify-center md:ml-90 py-10'
     style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip></Tooltip>
     <Legend >   </Legend>
    </PieChart>
        </div>
    </div>
    );
};

export default Stats;