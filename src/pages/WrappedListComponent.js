import React, { memo, useEffect, useState } from 'react';
import SingleListItem from './SingleListItem';
import PropTypes from 'prop-types';


const WrappedListComponent = (items) => {
    const [selectedIndex,setSelectedIndex] = useState();
   console.log(selectedIndex)
    useEffect(() => {
        setSelectedIndex(null);
    }, [items]);

    const handleClick = index => {
        setSelectedIndex(index);
    };
/*     const arr=[1,2,3] */
    return (
        <div>
        <ul style={{ textAlign: 'left' }}>
            {items.map((item, index) => (
                <SingleListItem
                    onClickHandler={() => handleClick(index)}
                    text={item.text}
                    index={index}
                    isSelected={selectedIndex}
                />
            ))}
        </ul>
    </div>
    );
};
WrappedListComponent.propTypes = {
    items: PropTypes.array(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })),
  };
WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);
export default List;