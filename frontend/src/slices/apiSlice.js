import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PRODUCTS_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL, // Use the PRODUCTS_URL constant as the endpoint for fetching products
      providesTags: ['Product'],
    }),
  }),
});
