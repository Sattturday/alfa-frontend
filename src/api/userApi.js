import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';
//import { getAuthToken } from '../utils/utils';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // если нужно будет, чтобы токен добавлялся во все запросы, то можно сюда добавить заготовку из authApi
  }),
  endpoints: (build) => ({
    // Заготовка запроса для списка всех ИПР с токеном в заголовке
    // getAllIDP: build.query({
    //   query: () => {
    //     const token = getAuthToken();
    //     const authHeader = token ? { Authorization: `Bearer ${token}` } : {};

    //     return {
    //       url: 'employee/get_all_users_and_ipr/',
    //       headers: authHeader,
    //     };
    //   },
    // }),

    // Определение запросa для получения списка всех ИПР
    getAllIDP: build.query({
      query: () => 'employee/get_all_users_and_ipr/',
    }),
    getUserIDP: build.query({
      query: () => 'employee_get_ipr/',
    }),
  }),
});

export const { useGetAllIDPQuery, useGetUserIDPQuery } = userApi;
