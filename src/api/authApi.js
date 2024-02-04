import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL_LOGIN } from '../utils/constants';
import { getAuthToken } from '../utils/utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_LOGIN,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: 'auth/token/login/',
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation({
      query: () => {
        const token = getAuthToken();
        const authHeader = token ? { Authorization: `Token ${token}` } : {};

        return {
          url: 'auth/token/logout/',
          method: 'POST',
          headers: authHeader,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
