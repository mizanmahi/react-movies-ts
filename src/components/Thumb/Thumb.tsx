import React from "react";

import { Image } from "./Thumb.style";

// routing
import { Link } from "react-router-dom";

type Props = {
   poster: string;
   clickable: boolean;
   movieId: number;
}

const Thumb: React.FC<Props> = ({ poster, clickable, movieId }) => {
   return (
      <div>
         {clickable ? (
            <Link to={`/${movieId}`}>
               <Image src={poster} alt="Movie_Thumbnail" />
            </Link>
         ) : (
            
               <Image src={poster} alt="Movie_Thumbnail" />
               
         
         )}
      </div>
   );
};

export default Thumb;
