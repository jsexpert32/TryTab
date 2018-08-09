import angular from 'angular';
const ngRoute = require('angular-route');
import uiBootstrap from 'angular-ui-bootstrap';

import splash from './splash/splash.component';
import social_link from './sociallink/sociallink.component'
import AppComponent from './app.component';
import './app.scss';

const root = angular
	.module( 'applogix', [
		splash,social_link,ngRoute,uiBootstrap
	])
	.component( 'applogix', AppComponent )
	.name;
angular.bootstrap( document, [ 'applogix' ] );

export default root;