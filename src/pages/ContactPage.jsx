import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div className="main-container">
    <Header/>
    <div className="contact">
    <h1 className="heading">cantact Us</h1>
    <p>
        We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
    </p>
    <h2>General Enquiries</h2>
    <hr/>
    <h5>Vivekanand College Main Campus</h5>
<p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India</p>
<br/>
<p>Phone: +91 12345 67890<br/>Email: info@vivekanandcollege.edu<br/>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
<h2>Addmision Office</h2>
    <hr/>
    <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>Phone: +91 98765 4321<br/>Email: admissions@vivekanandcollege.edu</p>
    <h2>Student Support Services</h2>
    <hr/>
    <p>For current student support, academic advising, or general assistance:<br/>Phone: +91 87654 32109<br/>Email: studentsupport@vivekanandcollege.edu</p>
        <h2>Find Us on the Map</h2>
        <hr/>
        <a href="https://www.google.com/maps/search/Vivekanand+College/@16.7018445,74.2185806,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D">find us on map</a>
       <h2>Send Us a Message</h2>
       <hr/>
       <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
    
       <div className="p">
        <p>© 2025 Vivekanand College. All rights reserved.</p>
       </div>
       </div>
        </div>
    )
}
export default ContactPage;