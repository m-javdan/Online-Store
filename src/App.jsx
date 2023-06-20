import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import ShoppingCard from "./pages/ShoppingCard";

const App = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="shopping-card" element={<ShoppingCard/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
};

export default App;
