import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import  {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () =>  {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//      test
//     </div>
//   );
// }

export default App;
