import Header from "../components/Headers/Header";

const CoursecPage= () =>{
    return(
        <div className="main-container">
            <Header/>
            <div className="course-div">
            <h1 className="heading">Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
        <h2>Discover Campus Life</h2>
        <hr/>
        
        <video src="/videos/video.mp4" width="500px" alt="Underflow" controls/>
        
        <h2>Undergraduate Programs (UG)</h2>
        <hr/>
        <ul>
            <li><b>Bachelor of Science (B.Sc.)</b></li>
            <ul type="disc">
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
            </ul><br/>
            <li><b>Bachelor of Commerce (B.Com)</b></li>
            <ul type="disc">
                <li>Accounting & Finance (3 years)</li>
                <li>Banking & Insurance (3 years)</li>
            </ul><br/>
            <li><b>Bachelor of Arts (B.A.)</b></li>
            <ul type="disc">
                <li>English Literature (3 years)</li>
                <li>Psychology (3 years)</li>
            </ul>
        </ul><br/>
    
        <h2>Postgraduate Programs (PG)</h2>
        <hr/>
        <ul>
            <li><b>Master of Science (M.Sc.)</b></li>
            <ul type="disc">
                <li>Computer Science (2 years)</li>
                <li>Information Technology (2 years)</li>
            </ul>
            <li><b>Master of Commerce (M.Com) (2 years)</b></li>
            <li><b>Master of Arts (M.A.) (2 years)</b></li>
        </ul><br/>
        <h2>Program Details & Fee Structure (Annual)</h2>
        <table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Program Type</th>
      <th>Course Name</th>
      <th>Duration</th>
      <th>Annual Fee (INR)</th>
      <th>Eligibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ug</td>
      <td>Bachelor of Science</td>
      <td>3 Years</td>
      <td>₹50,000</td>
      <td>10+2 with Science</td>
    </tr>
    <tr>
      <td>Pg</td>
      <td>Master of Arts</td>
      <td>2 Years</td>
      <td>₹40,000</td>
      <td>Graduation in any stream</td>
    </tr>
  <tr>
      <td>Pg</td>
      <td>B.Com. Accounting & Finance</td>
      <td>3 Years</td>
      <td>₹40,000</td>
      <td>10+2 Commerce (45%)</td>
    </tr>
  </tbody>
</table>
<h2>Specialized & Vocational Courses</h2>
<hr/>
<p>n addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
       <div className="c">
            <p>Do you have any questions?</p>
            <button className="btn">Enquey About courses</button>
        </div>
        </div>
        </div>
    )
}
export default CoursecPage;