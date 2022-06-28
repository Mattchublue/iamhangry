const { Review } = require('../models');

const reviewdata = [
  {
    review_text: 'ish soo gerd.',
    user_id: 4,
    post_id: 1
  },
  {
    review_text: 'its delicouss',
    user_id: 1,
    post_id: 2
  }

];

const seedReviews = () => review.bulkCreate(reviewdata);

module.exports = seedReviews;
