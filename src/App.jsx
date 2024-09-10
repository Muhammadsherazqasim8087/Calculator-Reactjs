import React, { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const inputHandler = (value) => {
    setInputValue(inputValue + value);
  };
  const Clear = () => {
    setInputValue("");
  };
  const Calculate = () => {
    try {
      const result = eval(inputValue);
    setInputValue(result);
    } catch (error) {
      setInputValue("error");
    }
  };
  const handleDelete = () => {
    if(inputValue?.length) {
      let val=inputValue.substring(0, inputValue?.length - 1);
    setInputValue(val);
    }
   };
  return (
    <> 
    
    <div className='main-container'>
      <input value={inputValue} readOnly className='input-box' />
      <div className='button-items'>

        <button onClick={Clear} className='clear'>C</button>
        <button onClick={handleDelete} className='delete'>D</button>
        <button onClick={() => inputHandler("%")}>%</button>
        <button onClick={() => inputHandler("/")}>/</button>

        <button onClick={() => inputHandler(1)}>1</button>
        <button onClick={() => inputHandler(2)}>2</button>
        <button onClick={() => inputHandler(3)}>3</button>
        <button onClick={() => inputHandler("*")}>*</button>

        <button onClick={() => inputHandler(4)}>4</button>
        <button onClick={() => inputHandler(5)}>5</button>
        <button onClick={() => inputHandler(6)}>6</button>
        <button onClick={() => inputHandler("-")}>-</button>

        <button onClick={() => inputHandler(7)}>7</button>
        <button onClick={() => inputHandler(8)}>8</button>
        <button onClick={() => inputHandler(9)}>9</button>
        <button onClick={() => inputHandler("+")}>+</button>

        <button onClick={() => inputHandler(0)}>0</button>
        <button onClick={() => inputHandler(".")}>.</button>
        <button onClick={Calculate} className='equal'>=</button>
        
      </div>
      
    </div>
    
    </>
  )
}

export default App












// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  
//     <h1>hhkk</h1>
// }

// export default App
