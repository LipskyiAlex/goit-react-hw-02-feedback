import React from "react";

const FeedbackOptions = ({onGood,onNeutral,onBad,onShow}) => {

      const handleClick = (e) => {

        onShow();
             
        switch(e.target.textContent) {

          case "Good": 
          onGood();
          break;

          case "Neutral":
            onNeutral();
            break;
          
            case "Bad":
            onBad();
            break;

            default:
                
        }
          
      }
  
     return (
    <div className="button-wrapper">
      
    <button type="button" onClick={handleClick}>Good</button>
    <button type="button" onClick={handleClick}>Neutral</button>
    <button type="button" onClick={handleClick}>Bad</button>
    </div>

)
}

export default FeedbackOptions;