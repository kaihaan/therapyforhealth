import React from 'react'
import {StyledLgContainer } from './lg.styled'

export default ({children, background, color}) => {
    return (
        <StyledLgContainer background={background} color={color}>
            {children}
        </StyledLgContainer>
    )
}