import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import mobileTemplate from './mobile.html';
import { name as BackBayMap } from '../backBayMap/backBayMap';

class BackBayInfo {
  constructor($stateParams) {
    'ngInject';
  }
}

const name = 'backBayInfo';
const template =  mobileTemplate;

 // create a module
 export default angular.module(name, [
   angularMeteor,
   BackBayMap
 ]).component(name, {
   template,
   uiRouter,
   controllerAs: name,
   controller: BackBayInfo
 })
   .config(config);

 function config($stateProvider) {
   'ngInject';
   $stateProvider
     .state('backBayInfo', {
       url: '/neighborhoods/BackBay',
       template: '<backBay-info></backBay-info>'
     });
 }
