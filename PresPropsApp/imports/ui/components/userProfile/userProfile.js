import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './userProfile.html';
import { Apartments } from '../../../api/users';
import { Favorites } from '../../../api/favorites';

// 
// http://stackoverflow.com/questions/40140369/mongodb-how-to-find-a-field-in-a-collection-that-has-a-reference-to-another

class UserProfile {
  constructor($stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.userId = $stateParams.userId;

      this.helpers({
        favorites() {
          return Favorites.findOne({
            _id: $stateParams.userId
          });
        }
      });


    remove() {
      Favorites.find({
        _id: this.favorite._id
      }, {
        $set: {
          favoritedBy: this.username
        }
      }, (error) => {
        if (error) {
          console.log('Oops, unable to delete this apartment...');
        } else {
          console.log('Done!');
        }
      });
    }
  }

const name = 'userProfile';

// create a module
// export default angular.module(name, [
//   angularMeteor,
//   uiRouter
// ]).component(name, {
//   template,
//   controllerAs: name,
//   controller: UserProfile
// })
//   .config(config);
//
// function config($stateProvider) {
//   'ngInject';
//
// $stateProvider.state('userProfile', {
//    url: '/profiles',
//    template: '<user-profile></user-profile>',
//    resolve: {
//      currentUser($q) {
//        if (Meteor.userId() === null) {
//          return $q.reject();
//        } else {
//          return $q.resolve();
//        }
//      }
//    }
//  });
//  }
 // create a module
 export default angular.module(name, [
   angularMeteor
 ]).component(name, {
   template,
   uiRouter,
   controllerAs: name,
   controller: UserProfile
 })
   .config(config);

 function config($stateProvider) {
   'ngInject';
   $stateProvider
     .state('profile', {
       url: '/profile',
       template: '<userProfile></userProfile>'
     });
 }
