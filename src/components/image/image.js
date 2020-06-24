import React from 'react'
import { StyledImageBlock } from './image-block.style'

export default ({ image, height }) => {
    return (
        <StyledImageBlock height={height}>
            <img src={image} alt={image}/>
        </StyledImageBlock>)
}