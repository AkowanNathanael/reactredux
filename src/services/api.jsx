
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";

const nav=useNavigate()
export const  userApi = createApi({
    reducerPath: "usersapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ()=>`/users`
        }),
        getUserById: builder.query({
            query: (id)=> `/users/${id}`
        }),
        addUser: builder.mutation({
            query: (newuser) => ({
                url: "/users",
                method: "post",
                headers: { "Content-Type": "application/json" },
                body:newuser
            })
        }),
        updateUser: builder.mutation({
            query: (updated) => ({
                url:`/users/${updated.id}`,
                method: "put",
                headers: { "Content-type": "application/json" },
                body:updated
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
                // headers: { "Content-Type": "application/json" },
                
            })
        })
    })
})
export  const {useGetAllUsersQuery,useGetUserByIdQuery, useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation}=userApi;

