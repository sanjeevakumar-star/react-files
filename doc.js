import React from 'react'  
import ReactTable from"react-tables";
  class Table extends React.Component {
  render() {

const data=[{
         FirstName:'sanju',
         lastName:'kumar',
         Age:23,
         Salary:19000
      },{
         FirstName:'arun',
         Lastname:'sharma',
         Age:22,
         Salary:19000
      },{
         FirstName:'suresh',
         LastName:'raj',
         Age:34,
         Salary:19000
      },{
         FirstName:'rose',
         LastName:'angle',
         Age:42,
         Salary:19000
      },{
         FirstName:'sanjay',
         LastName:'sharma',
         Age:21,
         Salary:19000
      },]
const columns=[{Header:'FirstName',
                accessor:'firstname'
      },{
         Header:'LastName',
         accessor:'lastname'
      },{
         Header:'Age',
         accessor:'age'
      },{
         Header:'Salary',
         accessor:'salary'
      }]
      return(<div>
         <ReactTable
         data={data}
         columns={columns}
         defaultPageSize={4}
        />
      </div>);


  }
}
export default Table;