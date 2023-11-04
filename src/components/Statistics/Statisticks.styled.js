const { default: styled } = require("styled-components")

export const List = styled.ul`
margin-top: 10px
`
export const ListItem = styled.li`
&:not(:first-child){
  margin-top: 5px;
}
`