import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--color-darkGrey);
   padding: 0 20px;
`;
export const Content = styled.div`
   width: 100%;
   max-width: var(--maxWidth);
   min-height: 70px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: var(--color-white);
   padding: 40px 0;

   @media only screen and (max-width: 45em) {
      flex-direction: column;
      padding: 20px 0;
   }

   .budget,
   .revenue,
   .runtime {
      width: 25%;
      background: var(--color-midGrey);
      padding: 15px 0;
      border-radius: 30px;
      display: grid;
      justify-content: center;
      align-items: center;
      font-size: var(--font-medium);

      @media only screen and (max-width: 45em) {
         width: 100%;
         margin-bottom: 10px; 
      }
   }
`;
