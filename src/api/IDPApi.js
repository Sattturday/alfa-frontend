import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';
import { getAuthToken } from '../utils/utils';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAuthToken();

      if (token) {
        headers.set('authorization', `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    // Получаем данные сотрудника и его ИПР (по id сотрудника)
    getIDPbyId: build.query({
      query: (id) => `employee/${id}/`,
    }),
  }),
});

export const { useGetIDPbyIdQuery } = userApi;
