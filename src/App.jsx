import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './styles/Pages.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursecPage from "./pages/CoursesPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";
import { useState } from "react";

const App = () =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
 <div>
  <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Abhimanyu vijay Patil"
          studentPhotoUrl="/images/abhi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>  
      <Route path="/courses" element={<CoursecPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes> 
    <ChatbotComponent/> 
    </Router>
  </div>
  )
}
export default App;