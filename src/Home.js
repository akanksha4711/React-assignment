import {useState} from "react";
import { useEffect } from "react";
import Card from "./Card";
import {Link} from "react-router-dom";

export default function(props){
    const [products, setProducts] = useState([...props.productList]);
    useEffect(() => { setProducts(props.productList)}, [props.productList] )
    return(<div>
      <h1>List of products</h1>
      <button onClick={()=>{
        // console.log("button1 clicked")
        const copyProducts = [products];
        copyProducts.sort((a,b) => a.title.localeCompare(b.title));
        setProducts(copyProducts);
      }}>Sort by title</button>
      <button onClick={()=>{
        // console.log("button2 clicked")
        const copyProducts = [products];
        copyProducts.sort((a,b) => a.price - b.price);
        setProducts(copyProducts);
      }}>Sort by price</button>
      {products.map((product)=> <Link key={product.id} to={`/${product.id}`}><Card  title={product.title} img={product.image} price={product.price} description={product.description} rating={product.rating}/></Link>)}
    </div>)
}
