import React from 'react';

import Section from './sectionTitle/section';
import FeedbackOptions from './sectionTitle/controls/feedbackOptions';
import Statistics from './statistics/statistics';
import IsEmptyNotification from './sectionTitle/notification/notification'
import {Wrapper} from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleClick = (option) => {
  
    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
      })
    );
  };

  render() {

     const {good,neutral,bad} = this.state;
     const total = good+neutral+bad;
     const positivePercentage = (good/total)*100;
    return (
      <Wrapper>
        <Section>
          <FeedbackOptions
            onClick={this.handleClick}
            options={Object.keys(this.state)}
          />
             <Statistics 
         good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={positivePercentage}     
       /> {total===0 && <IsEmptyNotification/>}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
