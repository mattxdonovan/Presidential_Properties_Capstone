import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './bostonMap.html';

/**
 * BostonMap component
 */
class BostonMap {
  constructor() {
    this.map = {
      center: {
        latitude: 42.3601,
        longitude: -71.0589
      },
      zoom: 12
    };
  }
}

const name = 'bostonMap';

// create a module
export default angular.module(name, [
  angularMeteor,
  'nemLogging', // https://github.com/angular-ui/angular-google-maps/issues/1633
  'uiGmapgoogle-maps'
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    apartments: '='
  },
  controller: BostonMap
});
