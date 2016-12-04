import { Meteor } from 'meteor/meteor';

import { Favorites } from './collection';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('favorites', function () {
    return Favorites.find();
  });
}
