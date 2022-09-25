import React from 'react';
import {PropTypes} from 'prop-types';
const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{ backgroundColor: isSelected ? 'green' : 'red' }}
            onClick={onClickHandler(index)}
        >
            {text}
        </li>
    );
};
SingleListItem.propTypes= {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };
export default SingleListItem;