import React from "react";

// routing
import { Link } from "react-router-dom";

// images / logos
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header: React.FC = (props) => {
   return (
      <Wrapper>
         <Content>
            <Link to="/">
               <LogoImg src={RMDBLogo} alt="RMDBLogo" />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
         </Content>
      </Wrapper>
   );
};

export default Header;
