'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/social_link', {
      template: '<sociallink></sociallink>'
    });
}