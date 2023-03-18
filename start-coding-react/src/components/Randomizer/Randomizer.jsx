import { useState } from "react";

const Randomizer = () => {
    
    let [count, setCount] = useState(0)

    return (
        <div className="">
            <h1>{count}</h1>
            <button onClick={() => setCount(Math.trunc(Math.random() * 100))}>Randomize</button>
        </div>
    );
}

export default Randomizer
