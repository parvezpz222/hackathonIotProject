import React from "react";
import Table from "./Table";
const TableContainer = ({ data }) => {

  return (
<div className="table-items">
    <div>
        <Table data={[]} columns={[]}/>
    </div>
    <div  className="items">
        <Table data={[]} columns={[]}/>
    </div>
    <div  className="items">
        <Table data={[]} columns={[]}/>
    </div>
    <div  className="items">
        <Table data={[]} columns={[]}/>
    </div>
</div>
  );
};

export default TableContainer;
