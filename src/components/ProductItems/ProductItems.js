import ProductItem from "./ProductItem/ProductItem";
import './ProductsItems.css'
const ProductItems = (props) => {
    let products = null;
    if(props.currentItems) {
        products = props.currentItems.map((element) => {
            return <ProductItem key={element.id} id={element.id} title={element.title} price={element.price} image={element.image} />
        })
    }
    
    
    return (
        <div className='grid-container'>
            {products}
        </div>
        
    )
}
export default ProductItems;