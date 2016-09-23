(function(){
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);

	function LoginController(AuthenticateService){
		const vm = this;
		vm.logged = false;

		vm.authenticate = () => {
			AuthenticateService.Login(vm.auth).then(function(response){
				console.log(response);
				vm.logged = true;
			});
		};
	}

})();
