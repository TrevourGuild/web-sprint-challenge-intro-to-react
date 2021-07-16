// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;


background-color: ${({theme}) => theme.primaryColor};
color: ${props => props.theme.white};

@media ${({theme: { breakpointMobile }}) => breakpointMobile} {
    width: initial;
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.theme.secondaryColor};
  }
  button {
    background-color: ${props => props.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
}
}
`

export default function Character({ info, action }){
    return (
        <StyledFriend className = 'character'>
            {info.name}
            <button onClick = {() => action(info.name)}>
            ^
            </button>
        </StyledFriend>
    )
}