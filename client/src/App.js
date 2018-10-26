import React, { Component } from 'react';
import './App.css';
import NavbarComp from './component/navbar.js'
import Item from './component/item.js'
import AddButton from './component/addButton.js'


class App extends Component {

  state={
    items:[]
  }

  //get request api
  componentDidMount(){
    fetch("/api")
    .then(res=>{res.json()
      .then(data=>{this.setState({items:data})})})
    .catch(err=>console.log(err))
  }

  //post request api
  submitData=(data)=>{
    fetch("/api",{
      headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
      method:"POST",
      body: JSON.stringify(data)
    }).then(res=>{res.json()
      .then(data=>{this.setState({
        items:[data,...this.state.items]
      })})})
    .catch(err=>console.log(err));
  };

  //delete request api
  removeData=(id)=>{
    fetch(`/api/${id}`,{
      method:"DELETE"}).then(res=>{res.json().then(data=>{
        if(data.success){
          let newData=this.state.items.filter(item=>
            item._id!==id
          );
          this.setState({items:newData});
        }
      })}).catch(err=>console.log(err));
  };

  render() {
    return (
      <div className="App">
      <NavbarComp></NavbarComp>
      <AddButton buttonLabel={"ADD"} submitData={this.submitData}></AddButton>
      <Item items={this.state.items} removeData={this.removeData}></Item>
      </div>
    );
  }
}

export default App;
