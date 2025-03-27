import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">בית</Link></li>
                <li><Link to="/instructors">המדריכים שלנו</Link></li>
                <li><Link to="/contact">צרו קשר</Link></li>
            </ul>
        </nav>
    );
}


export default Navbar;