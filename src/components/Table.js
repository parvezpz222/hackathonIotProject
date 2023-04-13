import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

// column format for bootstrap table
// const columns = [{
//     dataField: 'id',
//     text: 'User ID'
//     title : "tooltip data"
//   }];

  const Table = ({data}) =>{

    const pagination = paginationFactory({
 
    });

    const columns = Object.keys(data[0])?.map(el=>{
      return {
        dataField: el,
        text : el
      }
    });
    return <BootstrapTable keyField='id' data={ data } columns={columns} pagination={ pagination } />
  }

  export default Table;