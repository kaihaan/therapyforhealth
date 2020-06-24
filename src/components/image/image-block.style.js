import styled from 'styled-components'

export const StyledImageBlock = styled.div`

    overflow: hidden;
    text-align: center;

    img {
        object-fit: cover;
        width: ${({height})=> height ? '' : '100%'};
        height: ${({height})=> height ? '100%' : ''}
        /* transform: translateX(-25%); */
    }
`