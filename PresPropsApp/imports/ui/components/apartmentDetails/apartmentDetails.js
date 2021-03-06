import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import webTemplate from './web.html';
import mobileTemplate from './mobile.html';
import { name as AddFavorite } from '../addFavorite/addFavorite';
import { name as UserProfile } from '../userProfile/userProfile';
import { Apartments } from '../../../api/apartments/collection';

class ApartmentDetails {
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

const name = 'apartmentDetails';
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
  controller: ApartmentDetails
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider.state('apartmentDetails', {
    url: '/apartment/:apartmentId',
    template: '<apartment-details></apartment-details>'
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
