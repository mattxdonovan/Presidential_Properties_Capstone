import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';
import { Apartments } from '../../../api/apartments/collection';
import { name as RemoveFavorite } from '../removeFavorite/removeFavorite';

class ApartmentsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    // this.subscribe('apartments');

    this.helpers({
      apartments() {
        return Apartments.find({});
      }
    });
  }
}

const name = 'apartmentsList';
const template = Meteor.isCordova ? mobileTemplate : webTemplate;

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  RemoveFavorite,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: ApartmentsList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('apartments', {
      url: '/apartments',
      template: '<apartments-list></apartments-list>'
    //   resolve: {
    //   currentUser($q) {
    //     if (Meteor.userId() === null) {
    //       return $q.resolve();
    //     } else {
    //       return $q.resolve();
    //     }
    //   }
    // }
    });
}
