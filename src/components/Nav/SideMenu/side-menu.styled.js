// Menu.styled.js
import styled from 'styled-components';

export const StyledSideMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 4rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 1rem;
    padding: 0.5rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;