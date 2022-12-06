import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API}`}),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({query}) => {
        return {
          url: `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetMoviesMutation } = movieApi;
