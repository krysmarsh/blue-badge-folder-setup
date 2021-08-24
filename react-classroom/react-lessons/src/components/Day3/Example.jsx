import {React, useState} from "react";

const Example = () => {
    //Variables and useState are both storing data for is to ise later in the componenet. They both exist in our component and we can pass them as props.
//However, useState rerenders in our browser as it udpdates. Wjere as varoables do NOT.
const [number1, setNumber1] = useState(10);
let number2 = 5;

const usingState = () => {
    setNumber1(number1 - 1);
    console.log(number1);
}

const usingVariable = () => {
    let decrease = number2 - 1;
    document.getElementById("number2").textContent = decrease;
    console.log(decrease);
}
    return(
        <div>
            <button onClick={usingState}>number1</button>
            <p>{number1}</p>
            <button onClick={usingVariable}>number2</button>
            <p id="number2"></p>
        </div>
    )
}

export default Example;