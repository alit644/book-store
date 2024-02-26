import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Axios } from "../../../Api";

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Axios}/api/` }),
  endpoints: (builder) => ({
    // get category
    getCategoryByName: builder.query({
      query: () => {
        return {
          url: "categories?fields=title",
        };
      },
    }),
    // get books
    getbooks: builder.query({
      query: () => {
        return {
          url: "products?fields=title&fields=authorName&populate=*",
        };
      },
    }),

  
  }),
});

export const { useGetCategoryByNameQuery, useGetbooksQuery  } = categoryApi;
