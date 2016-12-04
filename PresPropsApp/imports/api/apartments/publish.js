import { Meteor } from 'meteor/meteor';

import { Favorites } from './collection';

if (Meteor.isServer) {
  Meteor.publish('apartments', function () {
    return Apartments.find();
  });
}
