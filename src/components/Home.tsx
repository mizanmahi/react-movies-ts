import React from "react";
/* eslint-disable camelcase */
// config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// image
import NoImage from "../images/no_image.jpg";

// components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./Searchbar/SearchBar";
import Button from "./Button/Button";

import Footer from "./Footer/Footer";

const Home: React.FC = () => {
   const {
      state,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      setIsLoadingMore,
   } = useHomeFetch(); // custom hook

   const { page, results, total_pages } = state;

   const heroMovie = results[2];

   if (error) return <div>Something went wrong!!</div>;

   return (
      <>
         {heroMovie && (
            <HeroImage
               title={heroMovie.original_title}
               text={heroMovie.overview}
               image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroMovie.backdrop_path}`}
            />
         )}

         <SearchBar setSearchTerm={setSearchTerm} />

         <Grid
            header={
               searchTerm
                  ? `Search Results for "${searchTerm}"`
                  : "Popular Movies"
            }
         >
            {results.map((movie) => (
               <Thumb
                  key={movie.id}
                  poster={
                     movie.poster_path
                        ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                        : NoImage
                  }
                  clickable
                  movieId={movie.id}
               />
            ))}
         </Grid>

         {loading && <Spinner />}
         {page < total_pages && !loading && (
            <Button
               text="Show More Movies"
               clickHandler={() => setIsLoadingMore(true)}
            />
         )}

         <Footer />
      </>
   );
};

export default Home;
