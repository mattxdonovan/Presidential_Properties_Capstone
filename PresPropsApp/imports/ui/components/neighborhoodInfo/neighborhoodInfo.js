import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';

class NeighborhoodInfo {
  constructor($stateParams) {
    'ngInject';
  }
}

const name = 'neighborhoodInfo';
const template = Meteor.isCordova ? mobileTemplate : webTemplate;

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
