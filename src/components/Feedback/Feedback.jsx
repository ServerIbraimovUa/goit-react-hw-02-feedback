import { Component } from 'react';
import { Container } from './Feedback.styled';
import Button from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //клік по кнопці
  onButtonClick = idx => {
    this.setState(prevState => ({ [idx]: prevState[idx] + 1 }));
  };

  //рахунок загальних оцінок
  countTotalFeedback = () => {
    return [this.state].reduce(
      (acc, { good, neutral, bad }) => acc + good + neutral + bad,
      0
    );
  };

  // формула позитивного відсотку
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  //основний рендер
  render() {
    const stats = this.state;
    const keys = Object.keys(this.state);
    const totalCount = this.countTotalFeedback();

    return (
      <Container>
        <h1>Please leave feedback</h1>

        {/* компонент кнопок */}
        <Button keys={keys} onButtonClick={this.onButtonClick} />
        <div>
          <h2>Statistics</h2>

          {/* умова при якій рендерется відповідна розмітка в залежності від активу */}
          {totalCount === 0 ? (
            <Notification text="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={stats.good}
              neutral={stats.neutral}
              bad={stats.bad}
              total={totalCount}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </Container>
    );
  }
}
