import React, {Component} from 'react'
import * as ReactBootstrap from 'react-bootstrap';



class Table4 extends Component {
  constructor() {
    super()

    this.state = {
       isLoading:true,
       items: null
    }
  }

  componentDidMount(){
    let url ="https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
      }
    }).then((result) => {
      result.json().then((resp)=>{
       this.setState({items:resp.data.medicalColleges})
      })
    })
  }


  render() {
   const items=this.state.items;
   console.warn(items);
    return (
      <div>
       {
         items ?
         <div>
           <ReactBootstrap.Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th><h2>State Name</h2></th>
            <th><h2>Institute Name</h2></th>
            <th><h2>City</h2></th>
            <th><h2>Type</h2></th>
            <th><h2>Admission Capacity</h2></th>
            <th><h2>Hospital Beds</h2></th>
          </tr>
        </thead>
        <tbody>
        {
          items.map((item)=>(
            <tr>
            <td>{item.state}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.ownership}</td>
            <td>{item.admissionCapacity}</td>
            <td>{item.hospitalBeds}</td>
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

export default Table4;