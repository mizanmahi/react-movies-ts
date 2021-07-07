import React from "react";
import { Wrapper, Content } from "./Footer.style";

import Logo from "../../images/react-movie-logo.svg";

const Footer: React.FC = () => {
   return (
      <Wrapper>
         <Content>
             <img src={Logo} alt="React Movie Logo" />
             <p>All right reserved &copy; 2021</p>
         </Content>
      </Wrapper>
   );
};

export default Footer;
