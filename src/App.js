import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import CheckOut from './Component/Checkout/Checkout'
import Login from './Component/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<> <Header></Header><Home></Home></>}/>
          <Route exact path="/CheckOut" element={<> <Header></Header><CheckOut></CheckOut></>}/>
          <Route exact path="/Login" element={<Login></Login>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
