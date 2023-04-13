import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

// column format for bootstrap table
// const columns = [{
//     dataField: 'id',
//     text: 'User ID'
//     title : "tooltip data"
//   }];

  const Table = ({data, columns}) =>{
    return <BootstrapTable keyField='id' data={ data } columns={ columns } />
  }

  export default Table;