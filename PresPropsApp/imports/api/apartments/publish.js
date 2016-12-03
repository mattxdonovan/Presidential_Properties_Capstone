import { Meteor } from 'meteor/meteor';

import { Favorites } from './collection';

if (Meteor.isServer) {
  Meteor.publish('favorites', function() {
    const selector = {
      $or: [{
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };

    return Favorites.find(selector);
  });
}
