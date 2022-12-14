import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from '../components/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions></FeedbackOptions>
        </Section>

        {/* <div>
          <button type="button"></button>
          <button type="button"></button>
          <button type="button"></button>
        </div> */}

        {/* <FeedbackOptions /> */}

        {/* <div>
          <h1></h1>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </>
    );
  }
}
