import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import { Apartments } from '../imports/api/apartments/collection';
import { Favorites } from '../imports/api/favorites/collection';

import { name as Presidential } from '../imports/ui/components/presidential/presidential';

function onReady() {
  angular.bootstrap(document, [
    Presidential
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
