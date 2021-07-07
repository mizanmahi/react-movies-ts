import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--color-midGrey);
`;

export const Content = styled.div`
   height: 50px;
   width: 100%;
   max-width: var(--maxWidth);
   padding: 0 20px;
   margin: 0 auto;
   color: var(--color-white);
   display: grid;
   grid-template-columns: repeat(3, max-content);
   grid-column-gap: 15px;
   align-items: center;

   a {
      color: inherit;
      text-decoration: none;
   }
`;
