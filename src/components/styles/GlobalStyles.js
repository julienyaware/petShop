import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bolder;
    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff) format('woff');
  }
  
body {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: regular;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white}
}

h1{
    font-size: 33px;
    font-weight: bold;
}

h2 {
    font-weight: bold;
    font-size: 28px;
}

h3 {
    font-size: 23px;
    font-weight: bold;
}

h4 {
    font-size: 18px;
    font-weight: bold;
}
`;

export default GlobalStyle;
