'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './splash.routes';
import * as properties from '../properties';

export class SplashComponent {
  /*@ngInject*/
  constructor($scope,$http,$location,$interval) {
    this.$scope = $scope;
    this.$location = $location;
    // this.day = "00";
    // this.hour = "00";
    // this.minute = "00";
    // this.second = "00";
    var me = this;
    this.countDownDate = new Date("Aug 5, 2017 15:37:25").getTime();
    this.startCount = $interval(function () {
      var now = new Date().getTime();
      var distance = me.countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      me.day = days.toString();
      me.hour = hours.toString();
      me.minute = minutes.toString();
      me.second = seconds.toString();

      if (days < 10) {
        me.day = "0" + me.day;
      }
      if (hours < 10) {
        me.hour = "0" + me.hour;
      }
      if (minutes < 10) {
        me.minute = "0" + me.minute;
      }
      if (seconds < 10) {
        me.second = "0" + me.second;
      }
      // If the count down is over, write some text 
      if (distance < 0) {
        me.stopCount();
      }
    }, 1000);
    this.stopCount = function () {
      $interval.cancel(this.startCount);
    }
  }
  $onInit() {

  }
  login() {
    this.$location.path("social_link");
  }
}

// Please note that the close and dismiss bindings are from $uibModalInstance.


export default angular.module('applogix.splash', [ngRoute])
  .config(routes)
  .component('splash', {
    template: require('./splash.html'),
    controller: SplashComponent,
    controllerAs: 'splashCtrl'
  })
  .name;
