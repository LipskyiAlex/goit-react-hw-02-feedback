import React from "react";
import Statistics from "./statistics/statistics";
import SectionTitle from "./sectionTitle";
import FeedbackOptions from './statistics/controls';
import IsEmptyNotification from "./notification/notification";

class  App extends React.Component  {
  
  state = {

    good:0,
    neutral:0,
    bad:0,
    total:0,
    positivePercentage:0,
    visbilityStat:false,
    visibilityMesssage: true,
  }
  
  
  render() {
  
    return (
    <div>
  
    <SectionTitle>
 
    <Statistics />
    </SectionTitle>
 
   
     </div>
    
   
   );
  }
 
};

export default App;


