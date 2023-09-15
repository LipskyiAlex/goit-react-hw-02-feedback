import React from 'react';

import Section from './sectionTitle/section';
import FeedbackOptions from './sectionTitle/controls/feedbackOptions';
import Statistics from './statistics/statistics';
import {Wrapper} from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visbilityStat: false,
    visibilityMesssage: true,
  };


  handleClick = (property) => {
    
    this.setState(
      prevState => ({
        [property]: prevState[property] + 1,
      })
    );
  };

  show = () => {
    this.setState({
      visbilityStat: true,
      visibilityMesssage: false,
    });
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
            onShow={this.show}
          />
             <Statistics 
         good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={positivePercentage}  
         visibilityMessage={this.state.visibilityMesssage}
         visbilityStat = {this.state.visbilityStat}        
       />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
