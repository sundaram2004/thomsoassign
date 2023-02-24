import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../header/navbar.css";
import logo from "../header/logo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="logo">
                <img src={logo} alt=""/>
                
            </div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Product</a>
				<a href="/#">Faq</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;