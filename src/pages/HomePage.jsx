import Header from '../components/Headers/Header';
import '../styles/pages.css'
const HomePage = () => {
    return (
<div className="main-container">
        
    <Header/>
        
            <div className="sub-div">
            <div className="image-container">
            <img src="./public/images/vck1.jpg" width="100%" height="550px" alt="College" className="background-image" />
            <div className="overlay-text">
                <h1>Welcome to Vivekanand College!</h1>
                <center><p>Your journey to excellence starts here.</p></center>
                <center><a href="/admission"><button className="buttons">Apply Now!</button></a></center>
                </div>
                </div>


            <h2>Welcome to Vivekanand College!</h2>
            <p>
                *Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
            </p>
            <br/><br/>
            <p>
                At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped
            </p>
            <br/><br/>
            <h2>Why Choose Vivekanand College?</h2>
            <hr/>
            <ul>
                <li>*Legacy of Excellence:* Decades of commitment to quality education.</li>
                <li>*Experienced Faculty:* Learn from renowned experts and passionate educators.</li>
                <li>*Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.</li>
                <li>*Holistic Development:* Focus on co-curricular activities, sports, and community service.</li>
                <li>*Strong Placements:* Excellent career opportunities with leading companies.</li>
            </ul>
            <br/>
            <br/>
            <h2>Campus Life & Facilities</h2>
            <br/>
            <hr/>
            <img src="./public/images/addmission.jpeg" width="50%" height="" />
            <img src="./public/images/vck.jpg" width="50%" height="250px" />
            <br/>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <br/>
            <div className="c">
                <p>Ready to explore our courses?</p>
                <button className="btn"><a href="/courses">Expore Courses</a></button>
            </div>
            </div>
                <div className="footer">
            <p>© 2025 Vivekanand College. All rights reserved.</p>
            </div>
            </div>
    );
};

export default HomePage;