import './App.css';
import axios from "axios";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import ProductDetails from './ProductDetails';
import Home from './Home.js';

function App() {
  const [products, setProducts]= useState([]);
  if(products.length===0){
  axios.get("https://fakestoreapi.com/products").then(response=>{
      setProducts(response.data);
    }).catch(error=>console.log(error));
  }
  return (
    <div className="App container">
      
      <Routes>
        <Route path='/' element={<Home productList={products}/>}></Route>
        <Route path="/:productId" element={<ProductDetails productList={products}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
