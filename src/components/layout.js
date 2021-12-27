import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Navbar from './Navbar';
import '../assets/style/main.scss';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../utils/GlobalContextProvider';

const Layout = ({ children, isIndex }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const [width, setWidth] = useState();

  useEffect(() => {
    if (localStorage.getItem('themeColour')) {
      dispatch({ type: 'SET_THEME', payload: localStorage.getItem('themeColour') });
    }
  }, []);

  const setScreenSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize();
    };

    setScreenSize();
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  const themeToggleHandler = () => {
    const toggleTo = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'TOGGLE_THEME' });
    localStorage.setItem('themeColour', toggleTo);
    trackCustomEvent({
      category: 'Toggle Theme',
      action: 'Change Theme',
      label: toggleTo,
    });
  };

  const lightDarkIcon = `M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
  3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
  13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z`;

  return (
    <div>
      <Helmet>
        <body className={state.theme === 'light' ? 'light-theme' : 'dark-theme'} />
      </Helmet>
      <div className="themeToggle">
        <span
          className="root"
          role="button"
          tabIndex="0"
          onKeyPress={() => themeToggleHandler()}
          onClick={() => themeToggleHandler()}
        >
          <svg
            version="1.1"
            width="20px"
            height="20px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>
              {
                state.theme === 'light'
                  ? 'Toggle to dark mode'
                  : 'Toggle to light mode'
              }
            </title>
            <path d={lightDarkIcon} style={{ fill: 'currentColor' }} />
          </svg>
        </span>
      </div>
      <div className="container">
        <div
          className="content"
          style={{
            marginRight: isIndex ? '15%' : '10%',
            marginLeft: '10%',
          }}
        >
          <main>{children}</main>
        </div>        
        {
          (isIndex && width > 909) && <Navbar isIndex={true} />
          || (isIndex && width < 910) && <Navbar isIndex={false} />
          || (!isIndex) && <Navbar isIndex={false} />
        }
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
