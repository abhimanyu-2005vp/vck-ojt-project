import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return(
        <div>
            <header>
             <nav className="navbar">
                    <h2 className="text">Vivekanand College</h2>
                    <div className="a">
                    <Link className="link" to="/"><b className="text">Home</b></Link>
                    <Link className="link" to="/about"><b className="text">About</b></Link>
                    <Link className="link" to="/courses"><b className="text">Courses</b></Link>
                    <Link className="link" to="/contact"><b className="text">Contact</b></Link>
                    <a href="/admission"><button className="button">Apply now!</button></a>
                </div>
                </nav>
                
            </header>
        </div>
    )
}
export default Header;