import {useState, useEffect} from 'react';

import Spinner from '../components/Ui/Spinner/Spinner';

import Pagination from '../components/Ui/Pagination/Pagination';
import SideBar from '../components/Ui/SideBar/SideBar';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let url;
        console.log(window.location.href.includes('/allproducts'))
        if(window.location.href.includes('/allproducts')) {
            url = 'https://fakestoreapi.com/products'
        }
        else if (window.location.href.includes(`/men's-clothing`)) {
            url = `https://fakestoreapi.com/products/category/men's clothing`;
        }
        else if (window.location.href.includes(`women's-clothing`)) {
            url = `https://fakestoreapi.com/products/category/women's clothing`;
        }
        else if(window.location.href.includes(`electronics`)) {
            url = `https://fakestoreapi.com/products/category/electronics`;
        }
        else if(window.location.href.includes(`jewlery`)) {
            url = `https://fakestoreapi.com/products/category/jewelery`;
        }
        fetch(url)
        .then((res) => {
            
            setLoading(false);
            if(!res.ok) {
                throw new Error('error');
            }
            return res.json();
        })
        .then((resData) => {
            console.log(products)
            setProducts(resData)
            
        })
        .catch(err => {
            console.log(err.message)
        })
        
    }, [])
    
    return (
        <>
        <div className='main-grid'>

        
        <div className='col1'>
            <SideBar />
        </div>
        <div className='col2'>
            <h2 className='text-center'>Products</h2>
            {loading === false && products.length !== 0 ? 
                <Pagination products={products} itemsPerPage={10}>

                </Pagination>
                
                
            
            : <Spinner />
            }
           
        </div>
        </div>
    
        </>
    )
}
export default Products;