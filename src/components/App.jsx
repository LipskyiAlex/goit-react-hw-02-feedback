import React from 'react';

import Section from './sectionTitle';
import FeedbackOptions from './statistics/controls';
import Statistics from './statistics/statistics';

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

  handleGood = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
        total: Math.round(prevState.total + 1),
      }),
      () => {
        this.countPositivePercentage();
      }
    );
  };

  handleNeutral = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
        total: Math.round(prevState.total + 1),
      }),
      () => {
        this.countPositivePercentage();
      }
    );
  };

  handleBad = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
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
      <div>
        <Section>
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
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
      </div>
    );
  }
}

export default App;
