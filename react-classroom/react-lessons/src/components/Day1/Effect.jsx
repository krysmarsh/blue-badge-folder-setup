//useEffect()

//Effects are "side effects"
//They wait and listen for the state to change or "update". It will firse off an action once the state has been updated.
import { useState, useEffect} from "react";
const Effect = () =>  {
    const [color, setColor]  = useState("")
    
    console.log(color, "line 9");
    
    //useEffect(callback function, [stateVariable])
    //function that fires an action, array that handles the updating and mounting.

useEffect (()  => {
    document.body.style.background = color;
}, [color]);

    const handleColorUpdate = (e) => {
        if(color === "")  {
            setColor("LightPink");   
       } else if (color === "LightPink") {
           setColor("Purple");
       } else if (color === "Purple") {
           setColor("LightPink");
       } else {
           setColor("Sorry, kid. You're out of luck!")
       }
 };  
        
    return(
        <div>
        
            <button onClick={handleColorUpdate}>{color !=="" ? color : "No Color"}</button>
        </div>
    )
    };

export default Effect;