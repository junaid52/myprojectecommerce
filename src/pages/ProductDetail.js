import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Ui/Spinner/Spinner';
import './ProductDetail.css';
const ProductDetail = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const params = useParams();
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
  .then((res) => {
    setLoading(false);
    return res.json()
})
  .then((json) => {
    
    setProduct(json)
  });
})

    return (
        <>
        {loading && <Spinner /> } 
        {product && <div className="container">
            <div className="box1">
                <img src={product.image}></img>
            </div>
            <div className="box2">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h4>{product.price}$</h4>
            </div>
        </div>
      }
        </>
    )
}
export default ProductDetail;