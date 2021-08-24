import { React, useState }  from "react";

const Challenge = () => {

const [number1, setNumber1] = useState(0);
const [number2, setNumber2] = useState(0);
const [total, setTotal] = useState(number1 + number2);
const calculateTotal = () =>  {
    setTotal(number1 + number2);
}
let number;
console.log(total);

    return(
        <div>
            <h1>Adding Two Numbers</h1>

    <input type="number" value={number1} onChange={(event)  =>{
                setNumber1(+event.target.value);
    }}/>

    
<input type="number" value={number2} onChange={(event)  =>{
                setNumber2(+event.target.value);   
                
}}/>
    <button onClick={calculateTotal}>Total</button>
    <h2>{total}</h2>
            <p>
            1. Create two separate useStates called number1 and number2. Initialize both to 0.
    2. Create another useState of total that adds both number1 and number2.
    3. Have two input fields. One that takes on the value of number1 and
    and the other that takes on the value of number2. Both have a type of "number".
    4. When the input value changes, have an onChange attribute target those values and
    sets number1 and number2 to those target values that the user put in.
    5. Create a button. When clicked it will call a function of calculateTotal()
    that adds both numbers together. Then sets the total.
6. Display the useState of total in an h2 tag within the return.

(Hint:
1. You do not need to create a form.
2. Remember setState.
3. With onChange do not forget the "event")
            </p>

 </div>      
    )
}

export default Challenge;