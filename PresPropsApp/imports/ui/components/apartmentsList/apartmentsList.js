import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './apartmentsList.html';
import { Apartments } from '../../../api/apartments';


class ApartmentsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      apartments() {
        return Apartments.find({});
      }
    });
  }
}

const name = 'apartmentsList';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  uiRouter,
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
    });
}
