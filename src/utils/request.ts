import axios from 'axios';

import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

const create = () => {
  const BASE_API = import.meta.env.VITE_BASE_URL;

  //   const token = window.localStorage.getItem('token');
  try {
    return axios.create({
      baseURL: BASE_API,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('🚀  ~ error', error);
    return axios.create({
      baseURL: BASE_API,
    });
  }
};

const checkError = (error: any) => {
  const {
    response: { status = 0, data: { message = '', statusCode = 0 } = {} } = {},
  } = error;

  toast({
    title: message,
    status: 'error',
    position: 'bottom-right',
  });

  // no auth, logout
  if (status === 401) {
    // logout here
  }
};

const callAPI = {
  get: async (route: string, params: Record<string, unknown>) => {
    try {
      const client = create();
      const { data } = await client.get(route, params);
      return data;
    } catch (error: any) {
      checkError(error);
    }
    return {};
  },
  post: async (route: string, body: Record<string, unknown>) => {
    try {
      const client = create();
      const { data } = await client.post(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
    return {};
  },
  put: async (route: string, body: Record<string, unknown>) => {
    try {
      const client = create();
      const { data } = await client.put(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
    return {};
  },
  patch: async (route: string, body: Record<string, unknown>) => {
    try {
      const client = create();
      const { data } = await client.patch(route, body);
      return data;
    } catch (error: any) {
      checkError(error);
    }
    return {};
  },
  delete: async (route: string) => {
    try {
      const client = create();
      const { data } = await client.delete(route);
      return data;
    } catch (error: any) {
      checkError(error);
    }
    return {};
  },
};

export default callAPI;
