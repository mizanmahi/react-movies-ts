import styled from "styled-components";

// types 
type Props  = {
   image: string;
}

export const Wrapper = styled.div<Props>`
   height: 600px;
   background-image: linear-gradient(
            rgba(28,28,28,0.2),
            rgba(28,28,28,0.2)
        ),
      url(${(props) => props.image});
   background-size: 100%, cover;
   background-position: top center;
   position: relative;
   animation: animateHeroImage 1s;

   @keyframes animateHeroImage {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;
export const Content = styled.div`
   padding: 50px;
   margin: 0 auto;
   max-width: var(--maxWidth);
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
`;
export const Text = styled.div`
   z-index: 100;
   max-width: 700px;
   display: grid;
   grid-template-rows: repeat(2, max-content);
   grid-row-gap: 10px;
   color: #2525;

   h1 {
       font-size: var(--font-huge);

       @media only screen and (max-width: 45em){
           font-size: var(--font-large);
       }
   }

   p {
       font-size: var(--font-large);

       @media only screen and (max-width: 45em){
           font-size: var(--font-medium);
       }
   }

   @media only screen and (max-width: 45em){
           max-width: 100%
       }
`;
