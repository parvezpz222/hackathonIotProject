import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
const Graph = ({ data}) => {
    const colors = {
        1:"#1ECBE1", 
        2:"#961EE1", 
        3:"#E1341E", 
        4:"#6AE11E",
        5:"#340BF4", 
        6:"#F40B57",
        7:"#CBF40B", 
        8:"#CBF40B"
    }
    const datac = [{x:1, y:34, z:54},{x:2, y:21, z: 90},{x:30, z:34, y:21}]
    console.log(data, "finally data is here")
    const SampleDataObject = data && Object.keys(data[0])
  return (
    <div> 
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
      {SampleDataObject.map((e,idx)=><Line type="monotone" dataKey={e} stroke={colors[idx]} />)}
          {/* <Line type="monotone" dataKey="x" stroke="#8884d8" />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" />
          <Line type="monotone" dataKey="z" stroke="#ffc658" /> */}
        </LineChart>
      </div>
  );
};

export default Graph;
