import React from "react";
import PropTypes from 'prop-types';
import {Button} from './controls.styled';
const FeedbackOptions = ({onClick,onShow}) => {

      const handleClick = (e) => {

        onShow();
        onClick(e.target.dataset.property);
                  
      }
  
     return (
    <div className="button-wrapper">
      
    <Button type="button" onClick={handleClick} data-property="good">Good</Button>
    <Button type="button" onClick={handleClick} data-property="neutral">Neutral</Button>
    <Button type="button" onClick={handleClick} data-property="bad">Bad</Button>
    </div>
 
)
}

FeedbackOptions.propTypes = {

  onClick:PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}



export default FeedbackOptions;
