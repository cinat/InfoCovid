import React, {Component} from 'react'
import * as ReactBootstrap from 'react-bootstrap';



class Table2 extends Component {
  constructor() {
    super()

    this.state = {
       isLoading:true,
       items: null
    }
  }

  componentDidMount(){
    let url ="https://api.rootnet.in/covid19-in/notifications"
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
      }
    }).then((result) => {
      result.json().then((resp)=>{
       this.setState({items:resp.data.notifications})
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
            <th><h2>Date and Title</h2></th>
            <th><h2>Notification link</h2></th>
          </tr>
        </thead>
        <tbody>
        {
          items.map((item)=>(
            <tr>
            <td>{item.title}</td>
            <td>{item.link}</td>
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

export default Table2;