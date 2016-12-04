import { Mongo } from 'meteor/mongo';

export const Favorites = new Mongo.Collection('favorites');

Favorites.allow({
  insert(userId, favorite) {
    return userId === userId;
  },
  update(userId, favorite, fields, modifier) {
    return userId === userId;
  },
  remove(userId, favorite) {
    return userId === userId;
  }
});
