import React from "react";

import FeedbackOptions from "./controls";
import IsEmptyNotification from '../notification/notification';

class Statistics extends React.Component {

  state = {

    good:0,
    neutral:0,
    bad:0,
    total:0,
    positivePercentage:0,
    visbilityStat:false,
    visibilityMesssage: true,
  }



    handleGood = () => {   

      this.setState(prevState => ( {

         good:prevState.good+1,
         total:Math.round(prevState.total+1),

      }), () => {

        this.countPositivePercentage()
      });
    }

    handleNeutral = () => {

      this.setState(prevState => ({

        neutral: prevState.neutral+1,
        total:Math.round(prevState.total+1),
  
      }), () => {

        this.countPositivePercentage()
      });

    }

    handleBad = () => {

      this.setState(prevState => ({

        bad:prevState.bad+1,
        total:Math.round(prevState.total+1),
        

      }), () => {

        this.countPositivePercentage()
      });
      
    }

      
  countPositivePercentage = () => {
    
    this.setState(prevState => ({

      positivePercentage:(prevState.good/prevState.total)*100,
    }))

  }


   show = () => {

    this.setState({
      
      visbilityStat:true,
      visibilityMesssage:false});
   }

    render() {

       return (
        <div>
         <FeedbackOptions
           onGood = {this.handleGood}
           onNeutral = {this.handleNeutral}
           onBad = {this.handleBad}
           onShow = {this.show}
         />
            <h2>Statistics</h2>
            {this.state.visibilityMesssage && (<IsEmptyNotification/>)}
            {this.state.visbilityStat && (<ul>
            <li>Good: <span>{this.state.good}</span></li>
            <li>Neutral: <span>{this.state.neutral}</span></li>
            <li>Bad: <span>{this.state.bad}</span></li>
            <li>Total: <span>{this.state.total}</span></li>
            <li>Positive feedback: <span>{Math.round(this.state.positivePercentage)}%</span></li>
           </ul>)}

           </div>
        
         

       )

    }
    
    }

export default Statistics;