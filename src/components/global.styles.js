import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        
        
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }

    body {
        font-family: "NewYork","Euclid";
    }

    a {
        text-decoration: none;
        color: #aaa;
    }

    a:hover {
        color: #000;
    }

    button { 
        font-family: "NewYork";
    }
`;
