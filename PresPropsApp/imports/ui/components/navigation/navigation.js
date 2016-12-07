import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';
import 'ionic-sdk/release/css/ionic.css';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import template from './navigation.html';
import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';

//
// class Navigation {
//   constructor($scope, $reactive, $stateParams) {
//     'ngInject';
//
//     $reactive(this).attach($scope);
//
//     this.userId = $stateParams.userId;
//
//     this.helpers({
//       findUserId() {
//         return Meteor.userId();
//       }
//     });
//   }
// }

const name = 'navigation';

// create a module
export default angular.module(name, [
  angularMeteor
  // uiRouter,
  // ApartmentDetails,
  // 'accounts.ui',
  // 'ionic'
]).component(name, {
  template,
  controllerAs: name
  // controller: Navigation
});
