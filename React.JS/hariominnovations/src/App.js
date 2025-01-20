import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./pages/ContactUs";
import './CSS/style.css'
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route /> */}
      <Route path="ContactUs" element={<ContactUs/>} />
      <Route path="Services" element={<Services/>} />
    </Routes>
    </BrowserRouter>
   
   
  
  );
}

export default App;
