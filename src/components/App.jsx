import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification/Notification';
import { Box } from './Box';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = { good, bad, neutral };

  const leaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedBack = () => good + neutral + bad;

  const positivePercentage = () => {
    return Math.round((good * 100) / totalFeedBack());
  };

  const total = totalFeedBack();
  const positive = positivePercentage();

  return (
    <Box mx="auto" maxWidth={450} p={'5'}>
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={options} />
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
    </Box>
  );
}
