import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, label, button{
        font: 500 0.875rem Poppins, sans-serif;
    }  

    button{
        cursor: pointer;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    
    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 20px;
    }

    h4 {
        font-size: 17px;
    }

    h5 {
        font-size: 16px;
    }

    h6 {
        font-size: 15px;
    }
`;
