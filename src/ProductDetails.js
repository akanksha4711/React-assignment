import { useParams } from "react-router-dom";

export default function(props){
    const {productId} = useParams()
    const product = props.productList.find(product => product.id == productId)
    return <div>
        <h1>{product.title}</h1>
        <h3>Category: {product.category}</h3>
        <h3>Description:</h3>
        <p>{product.description}</p>
        <h3>Price: {product.price}</h3>
        <h3>Rating: {product.rating.rate}, Count: {product.rating.count}</h3>
        <img src={product.image} width={400}></img>
    </div>
}