import React,{Component} from 'react';
import ReactTable from 'react-table'
 
class BasicTable extends Component{
  render() {
    const data = [
      {
      name: 'Ali',
      age: 28,
      friend: {
        name: 'Abubakar',
        age: 24,
        }
      },
      {
        name: 'Qasim',
        age: 27,
        friend: {
          name: 'Jason Maurer',
          age: 25,
        }
      },
      {
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
      }]
   
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]  
    return(
      <ReactTable
      data={data}
      columns={columns}
      />
    )
  }
}

export default BasicTable;