import React from 'react'
import styled from 'styled-components'

const Title = ({title, subtitle}) => {
    return (
        <TitleWrapper>
            <h4>
                <span className="title">{title}</span>
                <span>{subtitle}</span>
            </h4>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div `
text-transform: uppercase;
font-size: 2.3rem;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
h4{
  text-align: center;
  letter-spacing: 7px;
  color: var(--primaryColor);
}
span{
  display: block
}
.title{
  color: var(--mainBlack);
  
}
@media(min-width:576px){
  span{
    display: inline-block;
    margin: 0 0.35rem;
  }
}
`

export default Title
