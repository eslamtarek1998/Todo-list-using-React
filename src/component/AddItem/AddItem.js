import React, { Component } from 'react'
import './AddItem.css'

export default class AddItem extends Component {

    state={
        name:"",
        age:""
    }

    handleChangeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleChangeAge=(e)=>{
        this.setState({
            age:e.target.value
        })
    }

    // handleChange=(e)=>{
    //     this.setState({
    //         [e.target.id]:e.target.value
    //     })
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        if(e.target.name.value===""){
            return false
        }
        else{
            this.props.addItem(this.state)
        this.setState({
            name:"",
            age:""
        })
        }
    }




    

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder='Enter Name' id="name" onChange={this.handleChangeName} value={this.state.name}/>      
            <input type="number" placeholder='Enter Age' id="age" onChange={this.handleChangeAge} value={this.state.age}/> 
            <input type="submit" value="Add" /> 




        </form>
      </div>
    )
  }
}
