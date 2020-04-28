import axios from 'axios';
import { apiEndpoint, config } from './config';

const sendRatingToBigQuery = async (ratingObject) => {
  try {
    return (
      await axios.post(
        `${apiEndpoint}/api/userRating`,
        {
          ...ratingObject,
        },
        { ...config }
      )
    ).data;
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = error.response ? error.response.status : 500;
    throw err;
  }
};

export const userRating = { sendRatingToBigQuery };
