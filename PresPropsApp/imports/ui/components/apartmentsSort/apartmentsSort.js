import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';
import { Apartments } from '../../../api/apartments/collection';

class ApartmentSort {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    // this.subscribe('apartments');

    this.apartmentId = $stateParams.apartmentId;

      this.helpers({
        apartmentFind() {
          return Apartments.findOne({
            _id: $stateParams.apartmentId
          });
        }
      });
      this.helpers({
        findId() {
          return Meteor.userId();
        }
      });
    }
  }

const name = 'apartmentSort';
const template = Meteor.isCordova ? mobileTemplate : webTemplate;

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  AddFavorite,
  'accounts.ui'
]).component(name, {
  template,
  controllerAs: name,
  controller: ApartmentSort
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('apartmentSort', {
    url: '/apartment/:apartmentId',
    template: '<apartment-sort></apartment-sort>'
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
