import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "../components/image"
import big from "../images/me-big1.png";
import stackoverflow from "../images/stackoverflow.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

const navbar = ({width}) => {

    return (
        <div className="rightNav" style={{minWidth: width}}>
          <ul>
            <li>Profile.</li>
            <li>Interests.</li>
            <li>Experience.</li>
            <li>Articles.</li>
            <li>Testimonials.</li>
            <li>Contact.</li>
          </ul>
        <div className="imgWrappers">
            <div className="icons">
                <img className="social" src={stackoverflow} height="50px" width="50px"></img>
                <img className="social" src={github} height="50px" width="50px"></img>
                <img className="social" src={linkedin} height="50px" width="50px"></img>
            </div>
            <img className="bigImg" src={big}></img>
        </div>
        {/* <Image/> */}

      </div>
    )
}

export default navbar;