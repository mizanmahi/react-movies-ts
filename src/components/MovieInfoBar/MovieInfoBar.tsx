import React from "react";

// styles
import { Wrapper, Content } from "./MovieInfoBar.style";

// helper functions
import { calcTime, convertMoney } from "../../helpers";

import { MovieState } from "../../hooks/useMovieFetch";

// types
type Props = {
   movie: MovieState
}

const MovieInfoBar: React.FC<Props> = ({movie}) => {

    const duration = calcTime(movie.runtime);
    const totalBudget = convertMoney(movie.budget);
    const totalRevenue = convertMoney(movie.revenue);

   return (
      <Wrapper>
         <Content>
            <div className="runtime">
               <span>Running Time: {duration}</span>
            </div>
            <div className="budget">
               <span>Budget: {totalBudget}</span>
            </div>
            <div className="revenue">
               <span>Revenue: {totalRevenue}</span>
            </div>
         </Content>
      </Wrapper>
   );
};

export default MovieInfoBar;
