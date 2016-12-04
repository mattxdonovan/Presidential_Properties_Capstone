import { Mongo } from 'meteor/mongo';

export const Apartments = new Mongo.Collection('apartments');

Apartments.allow({
  insert(userId, apartment) {
    return false;
  },
  update(userId, apartment, fields, modifier) {
    return false;
  },
  remove(userId, apartment) {
    return false;
  }
});
