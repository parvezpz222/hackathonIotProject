import React,{useState, useEffect} from "react";

import CardList from "./CardList";
import GraphContainer from './GraphContainer'
import {getFormatedChassisTimeSeriesValues} from '../utils'

const MainPage = ({  arrayOfMessages }) => {
  const [selectedCard, setSelectedCard] = useState("192.168.1.1");
  const [allGraphData,setAllGraphData ] = useState([])

useEffect(()=>{
  const allGraphValues = getFormatedChassisTimeSeriesValues(arrayOfMessages[selectedCard])

  setAllGraphData(allGraphValues)
}, [arrayOfMessages,selectedCard ])
  return (
    <div>
      <CardList setSelectedCard = {setSelectedCard} className="CardContainer" ips = {Object.keys(arrayOfMessages)}/>

      <div class="divider">
  <span class="text">Card Data Populated here</span>
</div>
<GraphContainer allGraphData= {allGraphData}/>
    </div>
  );
};

export default MainPage;
