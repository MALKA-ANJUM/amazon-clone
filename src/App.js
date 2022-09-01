import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import CheckOut from './Component/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<><Home></Home></>}/>
          <Route exact path="/CheckOut" element={<><CheckOut></CheckOut></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
