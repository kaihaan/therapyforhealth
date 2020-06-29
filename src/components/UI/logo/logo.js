import React from 'react'
import { Link } from 'gatsby'
import { StyledLogo } from './logo.styled'

export default () => {
    return (
        <StyledLogo>
            <Link to="/">
                <span><h3>Therapy for Health</h3></span>
            </Link>
        </StyledLogo>
    )
}