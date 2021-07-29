import React from 'react';
import {BlockPicker} from 'react-color';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import './ColorPicker.css';

const ColorPicker = (props) => {
  const {
    expanded,
    onExpandEvent,
    onChange,
    currentState: {color},
    config: {colors},
  } = props;

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleOnChange = (color) => {
    onChange('color', color.hex);
  };

  const renderModal = () => {
    return (
      <div className="colorModal" onClick={stopPropagation}>
        <BlockPicker
          color={color || '#555555'}
          onChangeComplete={handleOnChange}
          colors={colors}
        />
      </div>
    );
  };

  return (
    <div
      className="colorWrapper"
      aria-haspopup="true"
      aria-expanded={expanded}
      aria-label="rdw-color-picker">
      <div onClick={onExpandEvent} className="iconWrapper">
        <Icon type="bg-colors" className="icon" />
      </div>
      {expanded ? renderModal() : undefined}
    </div>
  );
};

ColorPicker.propTypes = {
  expanded: PropTypes.bool,
  onExpandEvent: PropTypes.func,
  onChange: PropTypes.func,
  currentState: PropTypes.object,
};

export default ColorPicker;
