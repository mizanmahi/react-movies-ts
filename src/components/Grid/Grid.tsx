import { Wrapper, Content } from "./Grid.style";


type Props = {
   header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => {
   return (
      <Wrapper>
         <h1>{header}</h1>
         <Content >{children}</Content>
      </Wrapper>
   );
};

export default Grid;
