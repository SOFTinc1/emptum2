import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: syne;
        
        
        @media screen and (max-width: 800px) {
            padding: 0;
        }
    }

    body {
        font-family: "Mighty", "NewYork","Euclid";
    }

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #fff;
    }

    button { 
        font-family: "NewYork";
    }
`;
