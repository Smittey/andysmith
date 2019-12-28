import React from 'react';
import big from "../assets/images/me-big1.png";
import stackoverflow from "../assets/images/stackoverflow.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import { Link } from "gatsby";
import Image from "./image";

const navbar = ({isIndex}) => {

    return (
        <div className="rightNav" style={{minWidth: isIndex ? "40%" : "25%"}}>
          <ul>
            <li>
                <Link to="/" activeClassName="activeMenuLink" className="menuLink">
                    Profile.
                </Link>
            </li>
            <li>
                <Link to="/interests" activeClassName="activeMenuLink" className="menuLink">
                    Interests.
                </Link>
            </li>
            <li>
                <Link to="/experience" activeClassName="activeMenuLink" className="menuLink">
                    Experience.
                </Link>
            </li>
            <li>
                <Link to="/articles" activeClassName="activeMenuLink" className="menuLink">
                    Articles.
                </Link>
            </li>            
            <li>
                <Link to="/testimonials" activeClassName="activeMenuLink" className="menuLink">
                    Testimonials.
                </Link>
            </li>
            <li>
                <Link to="/contact" activeClassName="activeMenuLink" className="menuLink">
                    Contact.
                </Link>
            </li>
          </ul>
        <div className="imgWrappers">
            <div className="icons">
                <a href="https://stackoverflow.com/users/1295906/smittey" target="_blank" rel="noopener noreferrer">
                    <img className="social" src={stackoverflow} alt="stackoverflow icon"></img>
                </a>
                <a href="https://github.com/smittey" target="_blank" rel="noopener noreferrer">
                    <img className="social" src={github} alt="github icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/smittey" target="_blank" rel="noopener noreferrer">
                    <img className="social" src={linkedin} alt="linkedin icon"></img>
                </a>            
            </div>
            {/* <img className="bigImg" src={big} alt="Andy Smith"></img>
            <Image /> */}
            {isIndex 
            ? <img className="bigImg" src={big} alt="Andy Smith"></img>
            : <Image />
            }
            
        </div>
      </div>
    )
}

export default navbar;