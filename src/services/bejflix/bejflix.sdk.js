import getConfig from 'next/config';
import MovieSdk from '~/services/bejflix/movies/movies.sdk';

export class BejflixSdk {
  constructor(apiEndpoint) {
    this.movie = new MovieSdk(apiEndpoint);
  }
}

export const getBejflixSdk = () => {
  const { publicRuntimeConfig } = getConfig();
  const { MOVIES_API_ENDPOINT: apiEndpoint } = publicRuntimeConfig;
  return new BejflixSdk(apiEndpoint);
};
