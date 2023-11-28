

import React, { useState } from 'react';

const App = () => {
    const [num, setNum] = useState(0);
    const [input1, setInput1] = useState('');

    
    const [input2, setInput2] = useState('');

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    const add = () => {
        const result = parseFloat(input1) + parseFloat(input2);
        setNum(result);
    };

    const subtract = () => {
        const result = parseFloat(input1) - parseFloat(input2);
        setNum(result);
    };

    const divide =()=>{
        const result = parseFloat(input1) / parseFloat(input2)
        setNum(result)
    }

    const multiply =()=>{
        const result = parseFloat(input1) * parseFloat(input2)
        setNum(result)
    }

    

    return (
        <div>
            <input
                type="text"
                value={input1}
                onChange={handleInput1Change}
                placeholder='Enter num 1'
            />
            <input
                type="text"
                value={input2}
                onChange={handleInput2Change}
                placeholder='Enter num 2'
            />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
                <button onClick={divide}>Divide</button>
                <button onClick={multiply}>Multiply</button>
            </div>
            <p>Result: {num}</p>
        </div>
    );
};

export default App;
