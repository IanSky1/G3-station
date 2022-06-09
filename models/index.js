<<<<<<< HEAD
const User = require('./User');
// const Game = require('./Game');
const Post = require('./Post');
const Comment = require('./Comment');
=======
const Game = require('./Game');
const User = require('./User');
>>>>>>> blur

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment, Game };



module.exports = {
<<<<<<< HEAD
    User,
    Post,
    Comment,
=======
    Game
>>>>>>> blur
    
  };