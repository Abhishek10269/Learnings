import { useState } from "react";

function App() {
  const[todos,setTodos]=useState([{
    title:"do 1",
    description:"do1 des"
    },
    {
      title:"do 2",
      description:"do2 des"
      },
      {
        title:"do 3",
        description:"do3 des"
        }
      ]);
  const AddTodo=()=>
  {
    const newTodo = {
      id:4,
      title:"hey its me",
      description:"hey its me from des"
    }
    setTodos([...todos,newTodo])
  };

  return (
    <div>
    <button onClick={AddTodo}>Add Todo</button>
      {todos.map((item, index) => (
        <Todo key={index} title={item.title} description={item.description}></Todo>
      ))}
    </div>
  );
}


 

 function Todo({title,description})
 {
  return(
    <div>
     <h3>{title}</h3>
     <p>{description}</p>
    </div>
  )
 };
export default App
