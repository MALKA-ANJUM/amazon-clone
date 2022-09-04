import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import CheckOut from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import Payment from "./Component/Payment/Payment";
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Le1jMSCilcYE4NJZL0o1lJiqGQGwkCA608aChz408RlpzILhcTHmlMHjSiXjogmByWTpCJNVAEPyMXOhu4yBIkx00uAQdpGre"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this user is logged in", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Header></Header>
                <Home></Home> <Footer></Footer>
              </>
            }
          />
          <Route
            exact
            path="/CheckOut"
            element={
              <>
                {" "}
                <Header></Header>
                <CheckOut></CheckOut>
                <Footer></Footer>
              </>
            }
          />
          <Route exact path="/Login" element={<Login></Login>} />
          <Route
            exact
            path="/Payment"
            element={
              <>
                {" "}
                <Header></Header>
                <Elements stripe={promise}>
                  <Payment></Payment>
                </Elements>
                <Footer></Footer>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
