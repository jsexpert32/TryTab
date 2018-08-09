'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');

import routes from './sociallink.routes';
import * as properties from '../properties';

export class SocialLinkComponent {
  /*@ngInject*/
  constructor($http, $scope) {
  }
  $onInit() {
  }
}

// Please note that the close and dismiss bindings are from $uibModalInstance.


export default angular.module('applogix.sociallink', [ngRoute])
  .config(routes)
  .component('sociallink', {
    template: require('./sociallink.html'),
    controller: SocialLinkComponent,
    controllerAs: 'socialCtrl'
  })
  .name;