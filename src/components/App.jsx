import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification/Notification';

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
    return Math.round((this.state.good * 100) / this.totalFeedBack());
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.totalFeedBack();
    const positive = this.positivePercentage();

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} options={this.state} />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positive}
            />
          )}
        </Section>
      </>
    );
  }
}
