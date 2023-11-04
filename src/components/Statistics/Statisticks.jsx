import { List, ListItem } from "./Statisticks.styled";

export const Statistics = ({ state: { good, neutral, bad}, total, positiveFeedback }) => {
    return <List>
        <ListItem>Good: { good}</ListItem>
        <ListItem>Neutral: { neutral}</ListItem>
        <ListItem>Bad: :{bad}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive: feedback: {positiveFeedback}</ListItem>
        </List>
       
}