import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => {
  const isActive = ({ isCurrent }) => (isCurrent ? { className: 'activeMenuLink' } : null);

  return (
    <ul>
      <li>
        <Link to="/" getProps={isActive} className="menuLink">
          Profile.
        </Link>
      </li>
      <li>
        <Link to="/interests/" getProps={isActive} className="menuLink">
          Interests.
        </Link>
      </li>
      <li>
        <Link to="/experience/" getProps={isActive} className="menuLink">
          Experience.
        </Link>
      </li>
      <li>
        <Link to="/articles/" getProps={isActive} className="menuLink">
          Articles.
        </Link>
      </li>
      <li>
        <Link to="/testimonials/" getProps={isActive} className="menuLink">
          Testimonials.
        </Link>
      </li>
      <li>
        <Link to="/contact/" getProps={isActive} className="menuLink">
          Contact.
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
