import logo from './logo.svg';
import './App.css';
// import Header from "./components/Day1/Header";
// import AboutMe from "./components/Day1/AboutMe";
// import Footer from "./components/Day1/Footer";
// import State from "./components/Day1/State";
// import Effect from "./components/Day1/Effect"
// import TenLittleMonkeys from "./components/Day1/TenLittleMonkeys"
//const [stateVariable, setStateVariable] = useState(<initial state value>)
//  //variable, //function (our way of changing our state)
import Example from "./components/Day3/Example";
import Userinput from "./components/Day3/Userinput";
import Challenge from "./components/Day3/Challenge";
import UseEffectPractice from "./components/Day4/UseEffectPractice";

function App() {
  // const name = "Krystle";
  // const age = 300;
  // const rich = "true";
  return (
    <div className="App">
      <Example />
      <Userinput />
      <Challenge />
      <UseEffectPractice />
    </div>

    
  );
}
//npm start
export default App;
