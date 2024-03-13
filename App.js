import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App=()=>{
  const[InputList, setInputList]=useState('buy apple');
  const[Item,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);

  };
  const ListOffItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,InputList];
      

    });
    setInputList('');
  };
  
   
    const deleteItems = (id)=>{

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;

      })
    })
    
    };

  return(
    <>
   <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" placeholder="Add a item" onChange={itemEvent}
      value={InputList}
      />
      <button onClick={ListOffItems}>+</button>
      <ol>
        {/*<li>{InputList}</li>*/}

       {Item.map((itemval,index) => {
        return <ToDoLists 
        key={index} 
        id={index}
        text={itemval}
        onSelect={deleteItems}
        />;
        
        })};

      </ol>
    </div>

   </div>
    </>
  )
      }

export default App;