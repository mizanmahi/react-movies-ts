import React from "react";

import { Wrapper } from "./Button.style";

type Props = {
   text: string;
   clickHandler: () => void;
};

const Button: React.FC<Props> = ({ text, clickHandler }) => {
   return (
      <Wrapper type="button" onClick={clickHandler}>
         {text}
      </Wrapper>
   );
};

export default Button;
