import React from 'react';
import css from './Feedback.module.css';
import { Statistic } from './Statisctic/Staticts';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
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
        <div>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.onGood}
          >
            Good
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.onNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            onClick={this.onBad}
          >
            Bad
          </button>
        </div>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
