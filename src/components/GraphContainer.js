import React from "react";
import Graph from "./Graph";
const GraphContainer = ({ data }) => {
  return (
<div className="graphContainer">
  <div className="graphitems">
    Chassis-Temprature
<Graph/>
</div>
<div  className="graphitems">
<Graph/>
</div>
<div  className="graphitems">
<Graph/>
</div>
</div>
  );
};

export default GraphContainer;
