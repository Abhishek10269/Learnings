import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <CustomButton count ={count} setCount={setCount}></CustomButton>
      <CustomButton count ={count+1} setCount={setCount}></CustomButton>
    </div>


  )
}

// component 
function CustomButton(props) {

  function onclickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onclickHandler}>
    COUNTER{props.count}
  </button>
}

export default App
