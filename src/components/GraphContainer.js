import React from "react";
import Graph from "./Graph";
const GraphContainer = ({ allGraphData }) => {
  
   const graphs=  Object.keys(allGraphData).filter((e)=>e!=="cardIP")
   
  return (
<div className="graphContainer">
    {
        graphs.map((e)=>{
            return (
                <div className="graphitems">
                    <h3>{e}</h3>
                    <Graph data={allGraphData[e]}/>
                </div>
            )
        })
    }

   



</div>
  );
};

export default GraphContainer;
