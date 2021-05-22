import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

const InterestBox = ({
  icon,
  title,
  list,
  extra,
}) => (
  <div className="box">
    <IconContext.Provider value={{ className: 'icon' }}>
      {icon}
      {' '}
      <h2>{title}</h2>
    </IconContext.Provider>

    {(list && list.length > 0) && (
    <ul>
      {list.map((item) => <li key={JSON.stringify(item)}>{item}</li>)}
      {extra}
    </ul>
    )}
  </div>
);

InterestBox.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  list: PropTypes.array.isRequired,
  extra: PropTypes.string,
};

export default InterestBox;
