import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './userFavorites.html';
import { Favorites } from '../../../api/favorites';
import { Apartments } from '../../../api/apartments';

class UserFavorites {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      apartments() {
        return Apartments.find({});
      }
    });
  }
}

      // ,
      //   users() {
      //   return Meteor.users.find({});
      // }
    

//     this.subscribe('favorites');
//     this.subscribe('users');
//
//
const name = 'userFavorites';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  uiRouter,
  controllerAs: name,
  controller: UserFavorites
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('apartments', {
      url: '/userProfile',
      template: '<user-favorites></user-favorites>'
    });
}
