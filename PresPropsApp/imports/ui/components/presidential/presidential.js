import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';
import 'ionic-sdk/release/css/ionic.css';


import { Meteor } from 'meteor/meteor';

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';
import { Apartments } from '../../../api/apartments/collection';
import { Favorites } from '../../../api/favorites/collection';
import { name as ApartmentsList } from '../apartmentsList/apartmentsList';
import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
import { name as UserProfile } from '../userProfile/userProfile';
import { name as Navigation } from '../navigation/navigation';
import { name as Neighborhoods } from '../neighborhoodInfo/neighborhoodInfo';

// import { name as BackBayMap } from '../neighborhoodInfo/backBayInfo/backBayMap/backBayMap';


class Presidential {}

const name = 'presidential';
const template = Meteor.isCordova ? mobileTemplate : webTemplate;

// create a module
export default angular.module(name, [
  angularMeteor,
  ngSanitize,
  ngMaterial,
  uiRouter,
  ApartmentsList,
  ApartmentDetails,
  Navigation,
  UserProfile,
  Neighborhoods,
  // BackBayMap,
  'accounts.ui',
  'ionic'
  ]).component(name, {
  template,
  controllerAs: name,
  controller: Presidential
})
  .config(config)
  // .run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/apartments');
}
function run($rootScope, $state) {
  'ngInject';
  //
  // $rootScope.$on('$stateChangeError',
  //   (event, toState, toParams, fromState, fromParams, error) => {
  //     if (error === 'AUTH_REQUIRED') {
  //       $state.go('apartments');
  //     }
  //   }
  // );
}
