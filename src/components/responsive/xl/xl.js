import React from 'react'
import {StyledXLContainer } from './xl.styled'

export default ({children, background, color, nopadding}) => {
    return (
        <StyledXLContainer background={background} color={color} nopadding={nopadding}>
            {children}
        </StyledXLContainer>
    )
}