import BaseSdk from '~/services/bejflix/base.sdk';

class MovieSdk extends BaseSdk {
  async getAll() {
    return this.get('movies');
  }
  async getByGenre(genre) {
    return this.get(`movies/${genre}`);
  }
  async search(keyword) {
    return this.get(`movies/search/${keyword}`);
  }
  async getTop10() {
    return this.get(`movies/top10`);
  }
  async getRecommended(movieRatings) {
    return this.post(`movies/recommended`, movieRatings, true);
  }
}

export default MovieSdk;
