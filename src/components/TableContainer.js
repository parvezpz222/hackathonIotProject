import React from "react";
import Table from "./Table";
const TableContainer = ({ data }) => {
    console.log(data);
  return (
<div className="table-items">
    <div>
        Chassis Temp
        <Table data={data?.chassisTemp}/>
    </div>
    <div  className="items">
      Module CPUTemp
        <Table data={data?.testModuleCPUtemp}/>
    </div>
    {/* <div className="items">
        Test Module FPGATemp
        <Table data={[]}/>
    </div>
    {/* <div className="items">
        <Table data={[]}/>
    </div> */}
</div>
  );
};

export default TableContainer;
