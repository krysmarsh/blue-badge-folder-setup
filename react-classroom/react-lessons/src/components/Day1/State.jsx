//State is information that the component stores and keeps trackm of. State chang3s over time.
//State can be primitive (booleans, numbers

import { useState } from "react";
const State = () => {

    const [button, setButton] = useState("Hi there!");
    console.log(button);
    console.log(setButton);
    return (
        <div>
            <button onClick={(e) => setButton("Oh, hi Krys")}>Click Me!</button>
            <span>{button}</span>
            <h1>Hello, Krystle!</h1>
        </div>
    )
}

export default State;