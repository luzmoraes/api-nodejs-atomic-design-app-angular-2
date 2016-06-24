(function(){
	'use strict';

	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);

	function DashboardController($rootScope){
		const vm = this;
		console.log($rootScope.globals);
	}

})();