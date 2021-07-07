import React from "react";

import { Link } from "react-router-dom";

import { Wrapper, Content } from "./HeaderSecondary.style";

//types
type Props = {
   movieTitle: string;
}

const HeaderSecondary: React.FC<Props> = ({ movieTitle }) => {
   return (
      <Wrapper>
         <Content>
            <Link to="/">
               <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
         </Content>
      </Wrapper>
   );
};

export default HeaderSecondary;
