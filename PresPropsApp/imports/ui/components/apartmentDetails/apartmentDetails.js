import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './apartmentDetails.html';
import { Apartments } from '../../../api/apartments';

class ApartmentDetails {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.apartmentId = $stateParams.apartmentId;

      this.helpers({
        apartmentFind() {
          return Apartments.findOne({
            _id: $stateParams.apartmentId
          });
        }
      });
    }
  }

const name = 'apartmentDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
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
  });
}
