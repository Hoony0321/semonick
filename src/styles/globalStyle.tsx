import React from "react";
import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "bmjua";
          src: url("/fonts/BMJUA_otf.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
        }

        html {
          box-sizing: border-box;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        }
        body {
          -ms-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        html,
        body {
          /* white-space: pre; */
          font-family: bmjua, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
          height: 100%;
          padding: 0;
          margin: 0;
        }

        #__next {
          height: 100%;
        }

        main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
