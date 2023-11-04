import { Component } from "react";
import { Notification } from "components/Notification/Notification"
import { Statistics } from "components/Statistics/Statisticks"
import { Container} from "./GlobalStyle";
import { BtnFeedBack } from "./BtnFeedBack/BtnFeedBack";
import { Section } from "./Section/Section";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  changeStatisticks = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad

  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const toPercentage = (this.state.good / total) * 100;
    return Math.round(toPercentage)
  }
  checkState = () => {
    return this.state.bad > 0 || this.state.good > 0 || this.state.neutral > 0
  }
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return <Container>
      <Section title="Please leave feedback">
        <BtnFeedBack
        options={['good', 'neutral', 'bad']}
        onChangeStatisticks={this.changeStatisticks}/>
      </Section>

      <Section title='Statistics'>
       {this.checkState()
            ? (<Statistics state={this.state} total={total} positiveFeedback={positiveFeedback} />)
            : (<Notification message={'There is no feedback'} />)}
      </Section>
      </Container>
  }
}
