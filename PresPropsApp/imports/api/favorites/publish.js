import { Meteor } from 'meteor/meteor';

import { Favorites } from './collection';

// if (Meteor.isServer) {
//   Meteor.publish('favorites', function() {
//     const selector = {
//         // when logged in user is the owner
//         [{
//           owner: this.userId
//         }, {
//           owner: {
//             $exists: true
//           }
//         }]
//     };

//     return Favorites.find(selector);
//   });
// }
