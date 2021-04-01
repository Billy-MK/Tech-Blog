const User = require("User");
const Post = require("Post");
const Comment = require("Comment");

// Comments belong to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

// Posts belong to a user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

// Comments belong to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
})

// Posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    OnDelete: 'CASCADE'
})
  
module.exports = {
    User,
    Post,
    Comment
};
  