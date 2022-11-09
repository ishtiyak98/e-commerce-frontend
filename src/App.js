import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

export const DataContext = createContext("data");

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  console.log("cartDetails: ", cartDetails);
  return (
    <div>
      <DataContext.Provider value={{ cartDetails, setCartDetails }}>
        <Navbar></Navbar>
      </DataContext.Provider>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/product/:id"
          element={
            <DataContext.Provider value={{ cartDetails, setCartDetails }}>
              <ProductDetails></ProductDetails>
            </DataContext.Provider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
