import React,{useState, useEffect} from "react";

import CardList from "./CardList";
import GraphContainer from './GraphContainer'
import {getFormatedChassisTimeSeriesValues} from '../utils'
import TableContainer from "./TableContainer";

const MainPage = ({  arrayOfMessages }) => {
  const [selectedCard, setSelectedCard] = useState("192.168.1.1");
  const [allGraphData,setAllGraphData ] = useState([]);
  const [toggleView, setToggleView] = useState(false);

  const handleLayoutChange = () => {
    setToggleView(s=>!s);
  }
useEffect(()=>{
  const allGraphValues = getFormatedChassisTimeSeriesValues(arrayOfMessages[selectedCard])

  setAllGraphData(allGraphValues)
}, [arrayOfMessages,selectedCard ]);


  return (
    <div>
      <CardList setSelectedCard = {setSelectedCard} className="CardContainer" ips = {Object.keys(arrayOfMessages)}/>
      <div className="divider">
  <span className="text">Card Data Populated here</span>
</div>
  <button onClick={handleLayoutChange}>Change Data Layout</button>
  {!toggleView ? <GraphContainer allGraphData= {allGraphData}/> : 
    <TableContainer data = {allGraphData}/>}
    </div>
  );
};

export default MainPage;
