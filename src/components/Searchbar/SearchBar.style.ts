import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--color-midGrey);
   height: 100px;
   padding: 0 20px;
   display: flex;
   align-items: center;
`;

export const Content = styled.div`
   position: relative;
   max-width: var(--maxWidth);
   width: 100%;
   height: 60px;
   margin: 0 auto;
   background: var(--color-darkGrey);
   border-radius: 40px;
   color: var(--color-white);


    img {
        position: absolute;
        width: 30px;
        top: 14px;
        left: 15px;
    }

   input {
       font-size: var(--font-large);
       position: absolute;
       left: 0;
       margin: 8px 0;
       border: 0;
       width: 95%;
       background: transparent;
       height: 40px;
       color: var(--color-white);
       padding-left: 60px;

       :focus {
           outline: none;
       }

       @media only screen and (max-width: 45em){
           font-size: var(--font-medium);
       }
   }
`;
