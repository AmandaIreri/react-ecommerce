import { FaHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import './navbar.css'
import headphones from './headphones.jpg'
const Navbar = () =>{
    return(
        <nav id="navbar">
            <div id="logo">
                <b className="logo"><span>E</span>-Shop</b>
            </div>
            <div id="services">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <div id="icons">
                <IoIosSearch className="search-icon-top"/>
                <FaHeart className="icon"/>
                <FaCartPlus className="icon"/>
            </div>
        </nav>
    );
}
export const Landing = () =>{
    return(
        <div id="landing">
            <div id="intro">
                <h2 className="h21">Get the best product</h2>
                <h2>at your home</h2>
                <div className="search-bar">
                    <i><IoIosSearch className="fas fa-search search-icon"/></i>
                    <input type="text" placeholder="Search Your Product" className="search-input" />
                </div>
            </div>
            <div>
            <img src={headphones} alt="headphones" className="headphones"/>     
            </div>
        </div>
    )
}
export default Navbar;