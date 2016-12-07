import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './backBayMap.html';

class BackBayMap {
  constructor() {
    'ngInject';

    this.map = {
      center: {
        latitude: 42.3503,
        longitude: -71.0810
      },
      zoom: 12
    };
  }
}

const name = 'backBayMap';

// create a module
export default angular.module(name, [
  angularMeteor,
  'nemLogging',
  'uiGmapgoogle-maps'
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    backbayinfo: '='
  },
  controller: BackBayMap
})
