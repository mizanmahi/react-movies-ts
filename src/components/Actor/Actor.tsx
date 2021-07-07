import React from "react";

import { Wrapper, Image } from "./Actor.style";

//types
type Props = {
   name: string;
   character: string;
   imageUrl: string;
}

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => {
   return (
      <Wrapper>
         <Image src={imageUrl} alt="Actor_Thumb" />
         <h3>{name}</h3>
         <p>{character}</p>
      </Wrapper>
   );
};



export default Actor;
