import { useState } from "react";
import { Notification } from "components/Notification/Notification"
import { Statistics } from "components/Statistics/Statisticks"
import { Container} from "./GlobalStyle";
import { BtnFeedBack } from "./BtnFeedBack/BtnFeedBack";
import { Section } from "./Section/Section";

export const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const positiveFeedback = Math.round((good / total) * 100)
  
  const changeStatisticks = (key) => {
    switch (key) {
      case `good`:
        setGood(prevState => (prevState +1))
        break;
      case `neutral`:
        setNeutral(prevState =>(prevState +1))
        break;
      case `bad`:
        setBad(prevState => (prevState + 1))
        break;
      default:
        return;
    }
  }
  const checkState = () => {
    return bad > 0 || good > 0 || neutral > 0
  }
  return <Container>
      <Section title="Please leave feedback">
        <BtnFeedBack
        options={['good', 'neutral', 'bad']}
        onChangeStatisticks={changeStatisticks}/>
      </Section>

      <Section title='Statistics'>
       {checkState()
            ? (<Statistics state={[good, neutral, bad]} total={total} positiveFeedback={positiveFeedback} />)
            : (<Notification message={'There is no feedback'} />)}
      </Section>
      </Container>
}
