import React from 'react'
import './TodoItems.css'


export default function TodoItems(props) {
  return (
    <div className='ListItems'>

        <div>
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='action title'>Action</span>
        </div>

              {props.items.length ?    props.items.map(ele=><div key={ele.id}>
                <span className='name'>{ele.name}</span>
                <span className='age'>{ele.age}</span>
                <span className='action icon' onClick={()=>props.deleteItem(ele.id)}>&times;</span>

                                    </div>
            
            ) : <p>There Is No Items</p>}


    </div>
  )
}
