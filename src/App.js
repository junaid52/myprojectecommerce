import './App.css';
import Products from './pages/Products';
import {Routes, Route, Navigate, useRoutes} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/products/allproducts" />}>
        
      </Route>
      <Route key='allproducts' exact path="/products/allproducts" element={<Products />} />
      <Route key="men's clothing" exact path="/products/category/men's-clothing" element={<MenClothing />} />
      <Route key="women's clothing" exact path="/products/category/women's-clothing" element={<WomenClothing />} />
      <Route key='electronics' exact path="/products/category/electronics" element={<Electronics />} />
      <Route key='jewlery' exact path="/products/category/jewlery" element={<Jewelery />} />
      <Route exact path="/products/:id" element={<ProductDetail />}></Route>
    </Routes>
  );
}

export default App;
