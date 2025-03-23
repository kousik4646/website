
import './App.css';
import Home from './Home';
import Login from './Login';
import {  Routes, Route, Link } from 'react-router-dom';

function App() {
  
   return( <div>
      
      <Home/>
    
      <Routes>
        <Route path="/" element={<><h1>Welcome !</h1></>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<><h1>Register here !</h1></>}/>
        <Route path="/subscribe" element={<><h1>Subscribe friends</h1></>}/>
      </Routes>
      
    </div>

    
  );
}

export default App;
