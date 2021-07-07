import styled from "styled-components";

export const Wrapper = styled.button`
   border: none;
   outline: none;
   padding: 1rem 3rem;
   background: var(--color-midGrey);
   color: var(--color-white);
   font-size: var(--font-medium);
   border-radius: 30px;
   font-family: inherit;
   display: block;
   margin: 50px auto;
   cursor: pointer;
   letter-spacing: 1px;
   transition: 0.2s;

   box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.3);

   :hover {
      background: var(--color-darkGrey);
      transform: translateY(-2px);
   }
   :active {
      box-shadow: 0 7px 20px 5px rgba(0, 0, 0, 0.2);
      transform: translateY(0px);
   }

   @media only screen and (max-width: 45em) {
      font-size: var(--font-small);
      padding: 0.8rem 2.2rem;
   }
`;
