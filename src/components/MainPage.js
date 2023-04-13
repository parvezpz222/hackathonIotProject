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

const MainPage = ({  arrayOfMessages }) => {
  const data = [{x:1, y:34, z:54},{x:2, y:21, z: 90},{x:30, z:34, y:21}]

  console.log("data coming here", arrayOfMessages);

  return (
    <div>
      <div>
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="x" stroke="#8884d8" />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" />
          <Line type="monotone" dataKey="z" stroke="#ffc658" />
        </LineChart>
      </div>
    </div>
  );
};

export default MainPage;
