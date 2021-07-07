import styled from "styled-components";

// types
type Props = {
   backdrop: string
}

export const Wrapper = styled.div<Props>`
   background: url(${({ backdrop }) => (backdrop ? backdrop : "#000")});
   background-size: cover;
   background-position: center;
   padding: 40px 20px;
`;
export const Content = styled.div`
   max-width: var(--maxWidth);
   margin: 0 auto;
   background: rgba(0, 0, 0, 0.8);
   display: flex;
   border-radius: 20px;
   overflow: hidden;

   @media only screen and (max-width: 45em) {
      display: block;
   }
`;
export const Text = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   color: var(--color-white);
   padding: 20px 40px;
   overflow: hidden;

   .rating-directors {
      margin-top: 20px;
      display: grid;
      grid-template-columns: max-content;
      grid-template-rows: repeat(2, max-content);
      grid-row-gap: 10px;
   }

   .details {
      display: grid;
      grid-template-rows: repeat(3, max-content);
      grid-gap: 10px;
   }

   .score {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--color-darkGrey);
      color: #fff;
   }
   .releaseYear,
   .rating,
   .director {
      display: grid;
      grid-template-columns: max-content max-content;
      grid-gap: 20px;
      align-items: center;
   }
   .overview {
      font-weight: 300;
   }

   .releaseYear {
      margin-top: 10px;
   }
`;
