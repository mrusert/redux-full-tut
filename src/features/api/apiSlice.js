import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // Unique key within the Redux store
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }), // Base query with the server URL
    tagTypes: ['Todos'], 
    endpoints: (builder) => ({ // Endpoints for different API calls
        getTodos: builder.query({
            query: () => '/todos', // GET call
            transformResponse: res => res.sort((a,b) => b.id - a.id),
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({ // destructure id from todo passed in
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Todos']
        }),
    })
});

// custom hooks created based on methods defined above, these can be named using destructuring, e.g. useGetTodosQuery: useFetchToDos
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice