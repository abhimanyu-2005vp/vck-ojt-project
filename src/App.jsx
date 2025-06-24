import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './styles/Pages.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursecPage from "./pages/CoursesPage";

const App = () =>{
  return(
 <div>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>  
      <Route path="/courses" element={<CoursecPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>  
    </Router>
  </div>
  )
}
export default App;