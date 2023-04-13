import React,{useState, useEffect} from "react";

import CardList from "./CardList";
import GraphContainer from './GraphContainer'
import {getFormatedChassisTimeSeriesValues} from '../utils'

const MainPage = ({  arrayOfMessages }) => {
  const [selectedCard, setSelectedCard] = useState("192.168.1.1");
  const [chassisTempTimeSeriesValues,setChassisTempTimeSeriesValues ] = useState([])
  console.log("data coming here", arrayOfMessages[selectedCard], selectedCard);
useEffect(()=>{
  const ChassisTemp = getFormatedChassisTimeSeriesValues(arrayOfMessages[selectedCard])

}, [arrayOfMessages,selectedCard ])
  return (
    <div>
      <CardList setSelectedCard = {setSelectedCard} className="CardContainer" ips = {Object.keys(arrayOfMessages)}/>

      <div class="divider">
  <span class="text">Card Gata Populated here</span>
</div>
<GraphContainer/>
    </div>
  );
};

export default MainPage;
