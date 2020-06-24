import { createGlobalStyle } from 'styled-components';
// import px2vw from "../utils/px2vw";

// calculated responsive (complements static defs in global.css)
// and from theme vars
export const GlobalStyles = createGlobalStyle`

body {
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
}

  `