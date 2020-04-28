import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { API_ENDPOINT } = publicRuntimeConfig;

export const apiEndpoint = API_ENDPOINT;

export const config = {
  headers: {},
};
