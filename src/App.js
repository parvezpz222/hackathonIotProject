import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import {convertDataToTimeSeries} from './utils'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import "./App.css"
const App = () => {
  const [conn, setConn] = useState(null);
  const [log, setLog] = useState([]);
  const [groupedMessages, setGoupedMessaged] = useState({})

  const appendLog = (item) => {
    if(item){
    setLog((prevLog) => {
  
        let itemComing = JSON.parse(item)
        itemComing.body=  JSON.parse(itemComing?.body)

        // console.log(item)
      const newLog = [...prevLog, itemComing.body];
     const groupedMessages =  convertDataToTimeSeries(newLog)
     setGoupedMessaged(groupedMessages)
      return newLog;
    });
    
  }
  };


  useEffect(() => {
    const connectWebSocket = () => {
      const newConn = new WebSocket(`ws://${"10.62.136.36:8080"}/ws`);
      newConn.onclose = (evt) => {
        const item = <div><b>Connection closed.</b></div>;
        appendLog(item);
        setConn(null);
      };
      newConn.onmessage = (evt) => {
        const messages = evt.data.split("\n");
        for (let i = 0; i < messages.length; i++) { 
          const item =messages[i];
          appendLog(item);
        }
      };
      setConn(newConn);
    };

    if (window.WebSocket) {
      connectWebSocket();
    } else {
      const item = <div><b>Your browser does not support WebSockets.</b></div>;
      appendLog(item);
    }
  }, []);

  // console.log(log);
  return (
    <div>
      <h1>

Asset Monitering Dashboard 
</h1>
<LandingPage arrayOfMessages={groupedMessages}/>
    </div>
  );
};

export default App;
