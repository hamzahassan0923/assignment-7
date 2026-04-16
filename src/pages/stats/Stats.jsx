import React from 'react';
import { Pie, PieChart } from 'recharts';
const data = [
  { name: 'Text', value: 400, fill: '#7E35E1' },
  { name: 'Group B', value: 300, fill: '#244D3F' },
  { name: 'Group C', value: 300, fill: '  #37A163' },
  
];
const Stats = () => {
    return (
     <PieChart 
     style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
     
    </PieChart>
    );
};

export default Stats;