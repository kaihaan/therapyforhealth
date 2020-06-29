import React from 'react'
import { StyledImageBlock } from './image-block.style'

export default ({ image, constrainHeight }) => {
    return (
        <StyledImageBlock constrainHeight={constrainHeight}>
            <img src={image} alt={image}/>
        </StyledImageBlock>)
}