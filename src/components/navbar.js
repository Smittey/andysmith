import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "../components/image"
import big from "../images/me-big1.png";
import stackoverflow from "../images/stackoverflow.svg";

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
            <div className="column" style={{flex: "10%"}}>
                <img className="social" src={stackoverflow} height="100" width="100px"></img>
            </div>
            <div className="column" style={{flex: "90%"}}>
                <img className="bigImg" src={big}></img>
            </div>
        </div>
        {/* <Image/> */}

      </div>
    )
}

export default navbar;