import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F4F7;
    --white: #ffffff;
    --green: #2DA39B;
    --blue: #6584F9;
    --red: #F7847D;
    --pink: #F495E5;
    --purple: #BF93F9;
    --orange: #F7933F;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  border-style, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, p, strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disbled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`