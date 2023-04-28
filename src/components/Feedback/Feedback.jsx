import React from 'react';
import css from './Feedback.module.css';

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

  //   countTotalFeedback() {}
  //   countPositiveFeedbackPercentage() {}

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
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
