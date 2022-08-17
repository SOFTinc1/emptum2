import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: syne;
        
        
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }

    a {
        text-decoration: none;
        color: none;
    }

    button { 
        font-family: "NewYork";
    }
`;
