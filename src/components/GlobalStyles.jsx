import { Global, css } from "@emotion/react";

const globalStyles = css`
  @font-face {
    font-family: "Vogue";
    src: url("Vogue.ttf") format("truetype");
  }

  html {
    font-family: "Vogue", serif;
    background: #fcfcfd;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles;