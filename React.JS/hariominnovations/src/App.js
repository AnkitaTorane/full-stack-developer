import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./pages/ContactUs";
import './CSS/style.css'
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Product from "./pages/Product"
import AboutUs from "./pages/AboutUs"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Services" element={<Services />} />
        <Route path="Product" element={<Product />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
