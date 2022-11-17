import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background-color: white;
  }
  }
  body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background: #FAF9F6;
  }
  h1{
    font-size: 2.3rem;
    color: #333;
  }
  h2{
    font-size: 2rem;
    color: #333;
  }
  h3{
    font-size: 1.5rem;
    color: #333;
  }
  h4{
    color: #333;
  }
  p{
    font-size: 0.8rem;
    line-height: 150%;
    color: #696969;
  }
  input, textarea{
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
