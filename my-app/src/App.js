import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
    const [counter, setCounter] = useState(0);

    function clickHandler() {
        console.log(counter);
        setCounter((counter) => counter + 1);
    }
    useEffect(() => {
        console.log("after render", counter);
    });

    return (
        <div className='App'>
            <h1 className='app-header'>{counter}</h1>
            <button onClick={clickHandler}>+</button>
        </div>
    );
}
