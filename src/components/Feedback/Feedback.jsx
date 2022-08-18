import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // addGoodFeedback = e => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // addNeutralFeedback = e => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // addBadFeedback = e => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  addFeedback = e => {
    switch (e.target.textContent) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        break;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round((this.state.good * 100) / total);
    return String(positiveFeedback) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
        </Section>

        {total > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={posFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}
