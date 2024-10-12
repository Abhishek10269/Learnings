import { useState } from "react"
import React,{Fragment} from "react";

function App() {
  const[title,setTitle] = useState("Abhishek1")
  function updateTitle()
  {
    setTitle("My name is"+Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to see changes</button>
      <Header title={title}></Header>
      <Header title="abhishek is goat"></Header>
      <Header title="abhishek is goat"></Header>
      <Header title="abhishek is goat"></Header>
      <Header title="abhishek is goat"></Header>
    </div>
  )
}



const Header = React.memo(function Header({ title }) {
  return(
  <div>
    {title}
  </div>
  )
});

export default App
