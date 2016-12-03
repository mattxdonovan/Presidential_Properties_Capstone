import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('users', function() {
    return Meteor.users.find({}, {
      fields: {
        _id: 1,
        emails: 1,
        profile: 1
      }
    });
  });
}
