import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL_LOGIN } from '../utils/constants';
//import { getAuthToken } from '../utils/utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_LOGIN,
    // здесь заготовка на получение токена из локалсторадж и вставки в заголовки запроса
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getAuthToken();

    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
