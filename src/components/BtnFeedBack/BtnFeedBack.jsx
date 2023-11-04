import { Container, Btn } from './BtnFeedBack.styled'

export const BtnFeedBack = ({ onChangeStatisticks, options }) => {
    return (<Container>
        {options.map(item =>
            <Btn key={item}
                type="button"
                name={item}
                onClick={evt => { onChangeStatisticks(`${item}`) }}>
                {item}
            </Btn>)
        }
    </Container>)
} 
