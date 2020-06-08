import axios from 'axios';

class BaseSdk {
  constructor() {
    this.apiEndpoint = 'https://us-central1-bejflix.cloudfunctions.net/api';
  }

  getRequestConfig() {
    return {
      headers: {
        ContentType: 'application/json',
      },
    };
  }

  async post(path, payload) {
    try {
      const response = await axios.post(
        `${this.apiEndpoint}/${path}`,
        { ...payload },
        {
          ...this.getRequestConfig(),
        }
      );
      return response.data;
    } catch (error) {
      const err = new Error(error.response);
      err.statusCode = error.response ? error.response.status : 500;
      throw error;
    }
  }

  async put(path, payload, isArray) {
    try {
      const response = await axios.put(
        `${this.apiEndpoint}/${path}`,
        isArray ? [...payload] : { ...payload },
        {
          ...this.getRequestConfig(),
        }
      );
      return response.data;
    } catch (error) {
      const err = new Error(error.message);
      err.statusCode = error.response ? error.response.status : 500;
      throw err;
    }
  }

  async get(path) {
    try {
      const response = await axios.get(`${this.apiEndpoint}/${path}`, {
        ...this.getRequestConfig(),
      });
      return response.data;
    } catch (error) {
      const err = new Error(error.message);
      err.statusCode = error.response ? error.response.status : 500;
      throw err;
    }
  }

  async delete(path, payload) {
    try {
      const response = await axios.delete(`${this.apiEndpoint}/${path}`, {
        data: payload && [...payload],
        ...this.getRequestConfig(),
      });
      return response.data;
    } catch (error) {
      const err = new Error(error.message);
      err.statusCode = error.response ? error.response.status : 500;
      throw err;
    }
  }
}

export default BaseSdk;
