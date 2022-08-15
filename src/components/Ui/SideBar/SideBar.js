import {Link} from 'react-router-dom';
import './SideBar.css';
const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/products/category/men's-clothing">Men</Link>
                </li>
                <li>
                    <Link to="/products/category/women's-clothing">Women</Link>
                </li>
                <li>
                    <Link to="/products/category/electronics">Electronics</Link>
                </li>
                <li>
                    <Link to="/products/category/jewlery">Jewlery</Link>
                </li>
            </ul>
        </div>
    )
}
export default SideBar;