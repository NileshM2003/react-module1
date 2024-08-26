import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
   
    const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
       
        setCounter(counter + 1);
    };
    const handleClick2 = () => {
  
        setCounter(counter - 1);
    };
  return (
        <div className='app'>
            <h2>Counter App</h2>
            <div className='count'>
                {counter}
            </div>
            <div className='green'>
                <button onClick={handleClick1}>
                    Increment
                </button>
                </div>
                <div className='red'>
                <button onClick={handleClick2}>
                    Decrement
                </button>
                </div>
            
        </div>
    );
};

export default App
