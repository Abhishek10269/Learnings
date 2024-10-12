import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{display:'flex'}}>
     <Cardwrapper>
      
      <div style={{color:'blue',
        height:'100px',
        backgroundColor:'black'
      }}>hi there</div>
      </Cardwrapper> 
      <Cardwrapper>
        hi there 2
      </Cardwrapper>
      <Cardwrapper>
      hi there
      </Cardwrapper> 
      <Cardwrapper>
        hi there 2
      </Cardwrapper>
      <Cardwrapper>
      hi there
      </Cardwrapper> 
      <Cardwrapper>
        hi there 2
      </Cardwrapper>
    </div>
  )
}
function Cardwrapper({ children }) {
  return (
    <div style={{
      border: "2px solid black",
      height: '200px',
      width: '200px',
      backgroundColor: 'red',
    }}>
      {children}
    </div>
  )
}

export default App
