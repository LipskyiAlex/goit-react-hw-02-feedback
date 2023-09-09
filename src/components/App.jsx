import React from 'react';

import Section from './sectionTitle/section';
import FeedbackOptions from './sectionTitle/controls/controls';
import Statistics from './statistics/statistics';
import {Wrapper} from './App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    visbilityStat: false,
    visibilityMesssage: true,
  };


  handleClick = (property) => {
      
   
    this.setState(
      prevState => ({
        [property]: prevState[property] + 1,
        total: Math.round(prevState.total + 1),
      }),
      () => {
        this.countPositivePercentage();
      }
    );
  };


  countPositivePercentage = () => {
    this.setState(prevState => ({
      positivePercentage: (prevState.good / prevState.total) * 100,
    }));
  };

  show = () => {
    this.setState({
      visbilityStat: true,
      visibilityMesssage: false,
    });
  };

  render() {
    return (
      <Wrapper>
        <Section>
          <FeedbackOptions
            onClick={this.handleClick}
            onShow={this.show}
          />
             <Statistics 
         good={this.state.good}
         neutral={this.state.neutral}
         bad={this.state.bad}
         total={this.state.total}
         percentage={this.state.positivePercentage}  
         visibilityMessage={this.state.visibilityMesssage}
         visbilityStat = {this.state.visbilityStat}        
       />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
