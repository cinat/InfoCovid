import React, {Component} from 'react'
import * as ReactBootstrap from 'react-bootstrap';



class Table3 extends Component {
  constructor() {
    super()

    this.state = {
       isLoading:true,
       items: null
    }
  }

  componentDidMount(){
    let url ="https://api.rootnet.in/covid19-in/hospitals/beds"
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
      }
    }).then((result) => {
      result.json().then((resp)=>{
       this.setState({items:resp.data.regional})
      })
    })
  }


  render() {
   const items=this.state.items;
   console.warn(items);
    return (
      <div className="App">
       {
         items ?
         <div>
           <ReactBootstrap.Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th><h2>State Name</h2></th>
            <th><h2>Rural Hospitals</h2></th>
            <th><h2>Rural Beds</h2></th>
            <th><h2>Urban Hospitals</h2></th>
            <th><h2>Urban Beds</h2></th>
            <th><h2>Total Hospitals</h2></th>
            <th><h2>Total Beds(State-Wise)</h2></th>
          </tr>
        </thead>
        <tbody>
        {
          items.map((item)=>(
            <tr>
            <td>{item.state}</td>
            <td>{item.ruralHospitals}</td>
            <td>{item.ruralBeds}</td>
            <td>{item.urbanHospitals}</td>
            <td>{item.urbanBeds}</td>
            <td>{item.totalHospitals}</td>
            <td>{item.totalBeds}</td>
          </tr>
          ))
        }

        </tbody>
      </ReactBootstrap.Table>
         </div>
         : <p>Please Wait...Loading</p>
       }
      </div>
    )
  }
}

export default Table3;