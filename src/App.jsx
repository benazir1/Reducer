import { useReducer, useState } from 'react'
import './App.css'
function countReducer(state,action){
    switch(action.type){
      case "INCREMENT":
        return{count:state.count+1}
        case "DECREMENT":
        return{count:state.count-1}
        case "RESET":
        return{count:0}
        default:
          throw Error("Invalid action")
    }
}

function App() {
 
  const [state,dispatch] =useReducer(countReducer,{count:0});
  

  return (
    <>
    <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={(count)=>dispatch({type:"RESET"})}>Reset</button>
      
    </>
  )
}

export default App
