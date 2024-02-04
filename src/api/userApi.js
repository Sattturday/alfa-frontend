import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';
import { getAuthToken } from '../utils/utils';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getAuthToken();

      if (token) {
        headers.set('authorization', `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    // Определение запросa для получения данных авторизованного пользователя
    getMe: build.query({
      query: () => 'employee/me',
    }),
    // Определение запросa для получения списка всех подчиненных с ИПР
    getAllIDP: build.query({
      query: () => 'employee/my_employee/',
    }),
  }),
});

export const { useGetMeQuery, useGetAllIDPQuery } = userApi;
