import React, { useState } from "react";
import ReactDOM from 'react-dom';

export default function App() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
    };

    return (
        <div className="App">
            <h1>Function Component</h1>
            <div>counter: {counter}</div>
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));
