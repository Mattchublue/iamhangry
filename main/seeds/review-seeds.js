const { Review } = require('../models');

const reviewdata = [
  {
    review_text: 'ish soo gerd.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 1,
    post_id: 2
  }

];

const seedReviews = () => review.bulkCreate(reviewdata);

module.exports = seedReviews;
