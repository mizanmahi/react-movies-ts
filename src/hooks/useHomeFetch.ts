import { useEffect, useState } from "react";

//api
import APi, { Movie } from "../API";

// helper
import { getSessionData } from "../helpers";

const initialState = {
   page: 0,
   results: [] as Movie[],
   total_pages: 0,
   total_results: 0,
};

export const useHomeFetch = () => {
   const [state, setState] = useState(initialState);
   const [loading, setloading] = useState(false);
   const [error, setError] = useState(false);
   const [isLoadingMore, setIsLoadingMore] = useState(false);

   const [searchTerm, setSearchTerm] = useState("");

   const fetchMovies = async (page: number, searchTerm = "") => {
      try {
         setError(false);
         setloading(true);

         const movies = await APi.fetchMovies(searchTerm, page);

         setState((prev) => ({
            ...movies,
            results:
               page > 1
                  ? [...prev.results, ...movies.results]
                  : [...movies.results],
         }));
      } catch (err) {
         setError(true);
      }

      setloading(false);
   };

   // initial and search
   useEffect(() => {
      if (!searchTerm) {
         const sessionStorageData = getSessionData("sessionState");
         if (sessionStorageData) {
            setState(sessionStorageData);
            return;
         }
      }

      setState(initialState);
      fetchMovies(1, searchTerm);
   }, [searchTerm]);

   // loading more
   useEffect(() => {
      if (!isLoadingMore) return;
      fetchMovies(state.page + 1, searchTerm);
      setIsLoadingMore(false);
   }, [searchTerm, state.page, isLoadingMore]);

   useEffect(() => {
      if (!searchTerm)
         sessionStorage.setItem("sessionState", JSON.stringify(state));
   }, [searchTerm, state]);

   return {
      state,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      setIsLoadingMore,
   };
};
