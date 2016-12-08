import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';
import { Apartments } from '../../../api/apartments/collection';
import { Favorites } from '../../../api/favorites/collection';

import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
import { name as ApartmentsList } from '../apartmentsList/apartmentsList';
import { name as AddFavorite } from '../addFavorite/addFavorite';
import { name as RemoveFavorite } from '../removeFavorite/removeFavorite';

class UserProfile {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.userId = Meteor.userId();

    this.helpers({
      favoritesFind() {
        return Favorites.find({
          user_id: this.userId
        });
      }
    });
      this.helpers({
        findUser() {
          return Meteor.users.find({
            user_id: $stateParams.userId
          });
        }
      });
    }
  }

const name = 'userProfile';
const template = Meteor.isCordova ? mobileTemplate : webTemplate;


 export default angular.module(name, [
   angularMeteor,
   uiRouter,
   RemoveFavorite,
   'accounts.ui'
 ]).component(name, {
   template,
   controllerAs: name,
   controller: UserProfile
 })
   .config(config);

 function config($stateProvider) {
   'ngInject';
   $stateProvider
     .state('userProfile', {
       url: '/profile/:userId',
       template: '<user-profile></user-profile>'
//        resolve: {
//   currentUser($q) {
//     if (Meteor.userId() === null) {
//       return $q.reject('You must be logged in!');
//     } else {
//       return $q.resolve();
//     }
//   }
// }
     });
 }
