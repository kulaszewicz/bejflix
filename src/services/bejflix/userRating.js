import axios from 'axios';
import { config } from './config';
import { config } from './config';

const sendRatingToBigQuery = async (ratingObject) => {
  try {
    return (
      await axios.post(
        `https://us-central1-smiling-mark-270607.cloudfunctions.net/movieRating/api/userRating`,
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
