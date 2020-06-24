import React from 'react'
import {StyledMediumContainer } from './md.styled'

export default ({children, background, color, nopadding, valign}) => {
    return (
        <StyledMediumContainer background={background} color={color} nopadding={nopadding} valign={valign}>
            {children}
        </StyledMediumContainer>
    )
}