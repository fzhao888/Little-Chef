const {Post} = require('../models');

const postData = [
    {
       recipe_id: 1,
       reviewer_id: 1,
       comments: 'PB & J rox!!!!',
       ratings: 5,
       date_time: Date.now()
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;