import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './presidential.html';
import { name as ApartmentsList } from '../apartmentsList/apartmentsList';
import { name as ApartmentDetails } from '../apartmentDetails/apartmentDetails';
// import { name as UserFavorites } from '../userFavorites/userFavorites';
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
  // UserFavorites
  'accounts.ui'
  ]).component(name, {
  template,
  controllerAs: name,
  controller: Presidential
})
  .config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/apartments');
}
