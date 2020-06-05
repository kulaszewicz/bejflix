import BaseSdk from '~/services/bejflix/base.sdk';

class MovieSdk extends BaseSdk {
  async getAll() {
    return this.get('movies');
  }
  async getByGenre(genre) {
    return this.get(`movies/${genre}`);
  }
}

export default MovieSdk;
