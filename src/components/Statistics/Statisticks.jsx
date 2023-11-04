import { List, ListItem } from "./Statisticks.styled";

export const Statistics = ({ state, total, positiveFeedback }) => {
    return <List>
        <ListItem>Good: {state[0]}</ListItem>
        <ListItem>Neutral: {state[1]}</ListItem>
        <ListItem>Bad: :{state[2]}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive: feedback: {positiveFeedback}</ListItem>
        </List>
       
}