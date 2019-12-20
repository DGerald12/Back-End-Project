'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    PostId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    PostTitle: DataTypes.STRING,
    PostBody: DataTypes.STRING,
    UserId: {
      references: {
        models: 'users',  // refers to the 'users' table //
        key: 'UserId', // will use the UserId column in users table //
      },
      type: DataTypes.INTEGER
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, 
  {}
);

  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};