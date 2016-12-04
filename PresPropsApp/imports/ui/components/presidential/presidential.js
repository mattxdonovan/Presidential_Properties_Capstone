import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './presidential.html';
import { Apartments } from '../../../api/apartments/collection';
import { Favorites } from '../../../api/favorites/collection';
import { name as ApartmentsList } from '../apartmentsList/apartmentsList';
import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
import { name as UserProfile } from '../userProfile/userProfile';
import { name as NeighborhoodInfo } from '../neighborhoodInfo/neighborhoodInfo';

import { name as Navigation } from '../navigation/navigation';

class Presidential {}

const name = 'presidential';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ApartmentsList,
  ApartmentDetails,
  Navigation,
  UserProfile,
  NeighborhoodInfo,
  // UserFavorites
  'accounts.ui'
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
