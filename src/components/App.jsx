import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  totalFeedBack = () => this.state.good + this.state.neutral + this.state.bad;

  positivePercentage = () => {
    const positive = Math.round((this.state.good * 100) / this.totalFeedBack());

    console.log(Number.isNaN(positive));

    console.log(positive);

    return Number.isNaN(positive) ? 0 : positive;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.totalFeedBack();
    const positive = this.positivePercentage();
    console.log(positive);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} options={this.state} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      </>
    );
  }
}
