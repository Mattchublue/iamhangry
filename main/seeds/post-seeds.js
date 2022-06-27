const { Post } = require('../models');

const postdata = [
  {
    location: 'Denver',
    num_of_drinks: 2,
    user_id: 1
  },
  {
    location: 'Salt Lake City',
    num_of_drinks: 2,
    user_id: 5
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
