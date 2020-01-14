import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => (
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
);

export default NavLinks;
