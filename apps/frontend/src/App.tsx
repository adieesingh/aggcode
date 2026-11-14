import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [ws,setWs]=useState(new WebSocket("http://localhost:8080/"));
  useEffect(()=>{
      if(ws){
        ws.send("Hi there")
      }
  },[ws])
    return <>
      hi there
    </>
  
}

export default App
