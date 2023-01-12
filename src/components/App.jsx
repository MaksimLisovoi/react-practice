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

  return (
    <Box mx="auto" maxWidth={450} p={'5'}>
      <Section title="Statistics">
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          // total={total}
          // positivePercentage={positive}
        />
      </Section>
    </Box>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   totalFeedBack = () => this.state.good + this.state.neutral + this.state.bad;

//   positivePercentage = () => {
//     return Math.round((this.state.good * 100) / this.totalFeedBack());
//   };

//   render() {
//     const { good, bad, neutral } = this.state;
//     const total = this.totalFeedBack();
//     const positive = this.positivePercentage();

//     return (
//       <Box mx="auto" maxWidth={450} p={'5'}>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions onLeaveFeedback={this.leaveFeedback} options={this.state} />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback"></Notification>
//           ) : (
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={total}
//               positivePercentage={positive}
//             />
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
