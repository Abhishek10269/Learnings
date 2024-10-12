import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

  const [selectedId,setSelectedId]=useState(1);
 
  return (
    <div>
      <button onClick={function(){setSelectedId(1)}}>1</button>
      <button onClick={function(){setSelectedId(2)}}>2</button>
      <button onClick={function(){setSelectedId(3)}}>3</button>
      <Todo id={selectedId}></Todo>
    </div>
  );
}

function Todo({id})
{
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response =>{setTodo(response.data.todo)})
  },[id]);

  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
}

export default App
