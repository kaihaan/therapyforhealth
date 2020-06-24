import styled from 'styled-components'

// this will be the Row-Container for responsive Box elements
// called ContainerMd / ContainerSm etc...
export const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    text-align: center;
    background: ${({theme, background}) => {
        switch(background){
            case 'hero':
                return theme.hero
            case 'light':
                return theme.primaryLight
            case 'dark':
                return theme.primaryDark
            case 'video':
                return 'transparent'
            default:
                return theme.primaryLight
        }}};
    color:  ${({theme, background}) => {
        switch(background){
            case 'hero':
                return theme.primaryDark
            case 'light':
                return theme.primaryDark
            case 'dark':
                return theme.primaryLight
            default:
                return theme.primaryDark
        }}};


    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -10;
        }

    .video:after {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -5;
        background: black;
        opacity: 0.3;
        content: '\A';
        }
`