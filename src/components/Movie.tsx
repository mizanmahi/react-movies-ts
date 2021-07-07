import React from "react";

// routing
import { useParams } from "react-router";
// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import Spinner from "./Spinner/Spinner";
import Actor from "./Actor/Actor";
import HeaderSecondary from "./HeaderSecondary/HeaderSecondary";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Grid from "./Grid/Grid";
import Footer from "./Footer/Footer";

//image
import NoImage from "../images/no_image.jpg";

const Movie: React.FC = () => {
   const { movieId } = useParams();
   const { state: movie, loading, error } = useMovieFetch(Number(movieId));

   if (loading) return <Spinner />;
   if (error) return <div>Something Went wrong!</div>;
   return (
      <>
         <HeaderSecondary movieTitle={movie.title} />
         <MovieInfo movie={movie} />
         <MovieInfoBar movie={movie} />
         <Grid header="Casts">
            {movie.cast ?
               movie.cast.map((actor) => (
                  <Actor
                     key={actor.cast_id}
                     name={actor.name}
                     character={actor.character}
                     imageUrl={
                        actor.profile_path
                           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                           : NoImage
                     }
                  />
               )) : <Spinner/>}
         </Grid>
         <Footer />
      </>
   );
};

export default Movie;
