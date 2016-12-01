import { Mongo } from 'meteor/mongo';

export const Favorites = new Mongo.Collection('favorites');

Favorites.allow({
  insert(userId, favorite) {
    return userId && favorite.owner === userId;
  },
  update(userId, favorite, fields, modifier) {
    return userId && favorite.owner === userId;
  },
  remove(userId, favorite) {
    return userId && favorite.owner === userId;
  }
});
