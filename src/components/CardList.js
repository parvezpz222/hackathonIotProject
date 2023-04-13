import React from "react";

const CardList = ({ ips , setSelectedCard}) => {
  return (
    <div className="card-list">
      {ips.map((ip) => (
        <div  className="card" key={ip} onClick={()=>{setSelectedCard(ip)}}>
          <h3>{ip}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;
