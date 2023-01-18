import React ,{Component} from 'react'
import TodoItems from './component/TodoItems/TodoItems'
import AddItem from './component/AddItem/AddItem'



export default class App extends Component {
  state={
    items:[
      {id:1,name:"eslam",age:25},
      {id:2,name:"ahmed",age:23},
      {id:3,name:"hazem",age:24},
    ],

    
  }

  // deleteItem=(id)=>{
  //   let itemsss=this.state.items
  //   let i=itemsss.findIndex(ele=>ele.id===id)
  //   itemsss.splice(i,1)
  //   this.setState({items:itemsss})
  // }

  deleteItem=(id)=>{
    let itemsss=this.state.items.filter(ele=>ele.id !==id)
    
    this.setState({items:itemsss})
  }

  addItem=(ele)=>{
    let itemsss=this.state.items
    itemsss.push(ele)
    this.setState({items:itemsss})
    ele.id=Math.random()

  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

