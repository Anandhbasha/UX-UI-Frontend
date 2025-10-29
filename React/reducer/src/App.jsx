import React, { useReducer, useState } from 'react'

const App = () => {
  const reducer = (state,action)=>{
    switch(action.type){
      case "count":
        return {...state,count:state.count+1}
      case "red":
        return{...state,bg:state.bg==="light"?"red":"light"}
      case "Blue":
        return{...state,bg:state.bg==="light"?"Blue":"light"}
      case "Black":
        return{...state,bg:state.bg==="light"?"Black":"light"}
      case "Green":
        return{...state,bg:state.bg==="light"?"Green":"light"}
    }

  }
  const [state,dispatch] = useReducer(reducer,{count:0,bg:"light"})
  return (
    <div className="App">
      <p>{state.count}</p>
      <button>{state.bg}</button>
      <button onClick={()=>{dispatch({type:"count"})}}>Count</button>
      <button onClick={()=>{dispatch({type:"red"})}}>Red</button>
      <button onClick={()=>{dispatch({type:"Blue"})}}>Blue</button>
      <button onClick={()=>{dispatch({type:"Black"})}}>Black</button>
      <button onClick={()=>{dispatch({type:"Green"})}}>Green</button>
    </div>
  )
}

export default App