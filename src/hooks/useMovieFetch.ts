import { useState, useEffect } from "react";

// api
import API, {Cast, Crew, Movie} from "../API";

//types
export type MovieState = Movie & {cast: Cast[], directors: Crew[], release_date:number }

export const useMovieFetch = (movieId: number) => {
   const [state, setState] = useState<MovieState>({} as MovieState);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchMovie = async (movieId: number) => {
         try {
            setLoading(true);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            // get director
            const directors = credits.crew.filter(
               (crew) => crew.job === "Director"
            );

            setState({
               ...movie,
               cast: credits.cast,
               directors,
            });

            setLoading(false);
            setError(false);
         } catch (err) {
            setError(true);
         }
      };

      const sessionData = sessionStorage.getItem(movieId.toString());
      if(sessionData){
         setState(JSON.parse(sessionData));
         setLoading(false);
         return;
      }

      fetchMovie(movieId);
   }, [movieId]);

   useEffect(() => {
      sessionStorage.setItem(movieId.toString(), JSON.stringify(state))
   }, [movieId, state])

   return {
      state,
      error,
      loading,
   };
};
