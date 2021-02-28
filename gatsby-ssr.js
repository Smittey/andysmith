import React from 'react';
import PropTypes from 'prop-types';

const GlobalContextProvider = require('./src/utils/GlobalContextProvider').default;

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
