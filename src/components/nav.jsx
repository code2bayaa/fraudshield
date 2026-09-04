import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCoins, faHome, faSearch, faPoll, faTelevision, faUserFriends, faMobile } from "@fortawesome/free-solid-svg-icons";

const NAVBAR = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const open = () => {
        if(openMenu){
            menuRef.current.classList.remove("open");
        }else{
            menuRef.current.classList.add("open");
        }
        setOpenMenu(!openMenu);
    }
    return (
        <div className="w-[100%]">
            <header className="site-header">
                <div className="container nav">
                    <NavLink
                        to="/"
                        className={"brand"}
                    >
                        <img src="./logos/fraudshield-logo.png" alt="FraudShield"/>
                    </NavLink>
                        
                    <button 
                        className="menu-toggle"
                         
                        type="button" 
                        onClick={() => open()}
                    >Menu</button>
                    <nav ref={menuRef} className="nav-links" data-nav-links>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/industries"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            Industries
                        </NavLink>
                        <NavLink
                            to="/work"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            How We Work
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "flex"
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending button nav-btn" : isActive ? "active button nav-btn" : "flex button nav-btn"
                            }
                        >
                            Book Consultation
                        </NavLink>
                    </nav>
                </div>
            </header>

        </div>

    )
}

export default NAVBAR