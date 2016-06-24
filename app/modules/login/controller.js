(function(){
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);

	function LoginController(){
		const vm = this;
		vm.logged = false;

		vm.authenticate = () => {
			vm.logged = true;
		};
	}

})();