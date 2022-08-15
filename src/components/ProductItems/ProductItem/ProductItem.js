import './ProductItem.css';
import {Link} from 'react-router-dom';
const ProductItem = (props) => {
    return (
        <Link to={`/products/${props.id}`}>
            <div className="shirt">
                <img className='product-img' src={props.image}></img>
                <h6>{props.title}</h6>
                <h2>{props.price}$</h2>
            </div>
        </Link>
    )
}
export default ProductItem;