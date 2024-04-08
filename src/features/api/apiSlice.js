import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // Unique key within the Redux store
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }), // Base query with the server URL
    tagTypes: ['Post'], 
    endpoints: (builder) => ({})
});

// custom hooks created based on methods defined above, these can be named using destructuring, e.g. useGetTodosQuery: useFetchToDos
export const {
} = apiSlice