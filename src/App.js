
import './App.css';
import Header from ".//Mycomponents/Header";
import {Todos}  from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import {AddTodo} from "./Mycomponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i m ondelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;  
    }));
  }
    const addTodo=(title , desc)=>{
      console.log("I am adding this todo",title ,desc)
      // let index;
      // if(todos.length==0){
      //   index=0;
      // }
      // else{
      //    index = todos.length-1; 
      //    sno = todos[index].sno+1;
      // }
     // console.log("suman",todos.length-1)
      let index = todos.length-1;
      let sno;
      if(index ===-1){
         sno = 1;
     }else{
       sno = todos[index].sno+1;
     }
     
      const myTodo={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
    }
    const [todos, setTodos] = useState([
    {
      sno:1,
      title:"go to the market",
      desc:"you need to go to market to get this job done"
    },
    {
      sno:2,
      title:"go to the mall",
      desc:"you need to go to market to get this job done"
    },
    {
      sno:3,
      title:"go to the ghat",
      desc:"you need to go to market to get this job done"
    },
  ]);
  return (
    <>
   <Header title="MyTodosList" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
