import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import template from './userProfile.html';
import { Apartments } from '../../../api/apartments';
import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
import { name as ApartmentsList } from '../apartmentsList/apartmentsList';
import { name as AddFavorite } from '../addFavorite/addFavorite';
import { Favorites } from '../../../api/favorites';

class UserProfile {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.userId = $stateParams.userId;

    this.helpers({
      favoritesFind() {
        return Favorites.find({
          user_id: $stateParams.userId
        });
      }
    });
  }
}

const name = 'userProfile';


 export default angular.module(name, [
   angularMeteor,
   uiRouter,
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
     });
 }
