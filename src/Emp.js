import React from 'react'
import {ReactTable} from 'react-table';
class Empdata extends React.Component{
    render(){
        const data=[{Sno:1,Firstname:'sanju',Lastname:'kumar',Age:24},{
                     Sno:2,Firstname:'ajiy',Lastname:'krishna',Age:25},{
                    Sno:3,Firstname:'sandeep',Lastname:'guru',age:21},{
                     Sno:4,Firstname:'santhosh',Lastname:'priya',age:35},{
                     Sno:5,Firstname:'Dhivya',Lastnamee:'kumari',age:25}]
        const columns=[{Header:'Sno',accssor:'sno'},{
                        Header:'Firstname',accessor:'fristname'},{
                            Header:'Lastnmae',accessor:'lastname'},{
                                Header:'Age',accessor:'age'}]
        return(<div>
           <ReactTable 
           data={data}
           columns={columns}
           defaultPageSize={3}
            />
         </div>);

}
}
export default Empdata;


