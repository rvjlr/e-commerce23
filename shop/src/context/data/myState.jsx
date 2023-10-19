import React, { useState } from 'react'
import MyContext from './myContext';

function MyState(props) {
    const [mode, setMode] = useState('Light');

    const toggleMode = () => {
      if(mode === 'Light'){
        setMode('dark');
        document.body.style.backgroundColor = "rgb(17,24,39)"
      }
      else{
        setMode('Light');
        document.body.style.backgroundColor= "white"
      }
    }
    const [loading, setLoading] = useState(false)
        
  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState