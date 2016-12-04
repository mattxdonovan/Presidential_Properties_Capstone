import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './neighborhoodInfo.html';


class NeighborhoodInfo {
  constructor($stateParams) {
    'ngInject';
  }
}

const name = 'neighborhoodInfo';

 // create a module
 export default angular.module(name, [
   angularMeteor
 ]).component(name, {
   template,
   uiRouter,
   controllerAs: name,
   controller: NeighborhoodInfo
 })
   .config(config);

 function config($stateProvider) {
   'ngInject';
   $stateProvider
     .state('neighborhoodInfo', {
       url: '/neighborhoods',
       template: '<neighborhood-info></neighborhood-info>'
     });
 }
