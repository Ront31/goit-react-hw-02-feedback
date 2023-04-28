import React from 'react';
import { Statistic } from './Statisctic/Staticts';
import { FeedbackOptions } from './Options/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Statisctic/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    if (e === 'good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback() {
    let Total = 0;
    return Total + this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
