import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({
                url: `/contacts`,
            }),
            providesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        updateContact: builder.mutation({
            query: (id, contact) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
                body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useDeleteContactMutation,
    useAddContactMutation,
    useUpdateContactMutation,
} = contactsApi;
