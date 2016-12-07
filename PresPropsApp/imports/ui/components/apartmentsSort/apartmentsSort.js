import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './apartmentsSort.html';
import { Apartments } from '../../../api/apartments/collection';

class ApartmentSort {
  constructor() {
    this.changed();
  }

  changed() {
    this.onChange({
      sort: {
        [this.property]: parseInt(this.order)
      }
    });
  }
  }

const name = 'apartmentSort';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
  onChange: '&',
  property: '@',
  order: '@'
},
  controllerAs: name,
  controller: ApartmentSort
})
