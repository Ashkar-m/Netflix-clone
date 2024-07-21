import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Signup from './Components/signup';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    document.title='Netfilx'
})
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>

      

    </div>
  );
}

export default App;
