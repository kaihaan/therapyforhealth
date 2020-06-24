// Menu.styled.js
import styled from 'styled-components';

export const StyledTopMenu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 4rem;
    padding: 0px 1rem;

    & > span {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 4rem;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    h1 {
        padding: 0 auto;
        margin: 0px;
    }
 /*
    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.primaryLight};
        text-decoration: none;
        transition: color 0.3s linear;
        

        &:hover {
        color: ${({ theme }) => theme.primaryHover};
        }
    }
    */
`