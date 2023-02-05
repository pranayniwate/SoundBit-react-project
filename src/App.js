import './App.css';
import Navbar from './components/navbar/Navbar'
import Header from './containers/header/Header'
import Brands from './components/brands/Brands'
import Whyus from './components/whyus/Whyus'
import Products from './containers/products/Products'
import Footer from './components/footer/Footer'
import Cart from './containers/cart/Cart'
import AllProducts from "./containers/AllProducts/AllProducts"
import Headphones from "./containers/headphones/Headphones"
import Earphones from "./containers/earphones/Earphones"
import Speakers from "./containers/speakers/Speakers"
import NotFound from "./containers/notFound/NotFound"

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<>
            <Header/>
            <Brands/>
            <Whyus/>
            <Products/>
            </>}/>

            <Route path="/cart" element={<Cart/>}/>
            <Route path="/all" element={<AllProducts/>}/>
            <Route path="/headphones" element={<Headphones/>}/>
            <Route path="/earphones" element={<Earphones/>}/>
            <Route path="/speakers" element={<Speakers/>}/>
            <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
