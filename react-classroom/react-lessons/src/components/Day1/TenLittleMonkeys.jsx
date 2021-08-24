import { useState, React} from "react";
//rafcem "React Arrow Functional Component Export"
const monkeys = "little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!" 
const TenLittleMonkeys = () => {
    const [number, setNumber] = useState(10);
const handleClick = () => setNumber(number - 1)

    return(
        <div>
    <button>{button} </button>
        </div>
    )
}
//const TenLittleMonkeys = () => {
 //   const [monkeyCount, setMonkeyCount] = useState(10);

 const totalMonkeys = 
 monkeyCount > 0
 ? `$`
   // return (
     //   <div>


       // </div>
   // )
}
export default TenLittleMonkeys;