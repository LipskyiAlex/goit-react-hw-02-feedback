import React from "react";

const FeedbackOptions = ({onClick,onShow}) => {

      const handleClick = (e) => {

        onShow();
        onClick(e.target.dataset.property);
                  
      }
  
     return (
    <div className="button-wrapper">
      
    <button type="button" onClick={handleClick} data-property="good">Good</button>
    <button type="button" onClick={handleClick} data-property="neutral">Neutral</button>
    <button type="button" onClick={handleClick} data-property="bad">Bad</button>
    </div>

)
}

export default FeedbackOptions;