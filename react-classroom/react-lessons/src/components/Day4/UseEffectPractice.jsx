import { React, useState, useEffect} from "react";

const UseEffectPractice = () => {
    const [animal, setAnimal] = useState("alligator");
    const [isPredator, setIsPredator] = useState(undefined);

   function handleClick ()  {
       setAnimal("monkey");
   }
   console.log(isPredator);
   console.log(typeof isPredator);
//useEffect runs an action when our state changes and when our app first runs.
   useEffect(() => {
    switch (animal) {
        case "monkey":
        setIsPredator(false);
        break;
        case "alligator":
        setIsPredator(true);
        break;
        default:
            setIsPredator(undefined);
    }
   }, [animal]);
// ?? Nullish Coalescing Operator. It check to see if our value is null or undefined.  If it null, it will run the right hand side of the operator, if it isn't it will run the left side of the operator.
    return(
        <div>
            <p>The current animal is {animal} and Predator is set to {isPredator?.toString() ?? "undefined"}</p>
            <button onClick={handleClick}>Click to change the animal</button>
        </div>
    )
}

export default UseEffectPractice;