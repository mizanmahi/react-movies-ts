import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --maxWidth: 1280px;

        --color-white: #fff;
        --color-lightGrey: #eee;
        --color-midGrey: #353535;
        --color-darkGrey: #1c1c1c;

        --font-huge: 2.5rem;
        --font-large: 1.5rem;
        --font-medium: 1.3rem
        --font-small: 1rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: "Abel", sans-serif;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--color-white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--color-white);
        }
    }

    .not-found {
        background: var(--color-midGrey);
        text-align: center;
        height: calc(100vh - 80px);
        padding: 20px;
        
        img {
            max-width: 70%;
            height: auto;
            display: block;
            margin: 0 auto;
            
        }
        a:link, a:visited {
            color: var(--color-white);
            padding: 1rem 1.5rem;
            background: var(--color-darkGrey);
            display: inline-block;
            margin-top: 100px;
            text-decoration: none;
            font-size: var(--font-large);
            font-weight: 700;
            box-shadow: 0 10px 15px 0px rgba(0,0,0,0.2);
            border-radius: 5px;
            transition: all .3s;

            &:hover,
            &:active {
                background: var(--color-lightGrey);
                color: var(--color-darkGrey);
            }

            @media only screen and (max-width: 45em) {
                font-size: var(--font-medium);
                font-weight: 500;
                padding: .8rem 1.3rem;

            }

        }
        
       

    }

`;
