(function(){
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);

	function LoginController(AuthenticateService){
		const vm = this;
		vm.logged = false;

		vm.authenticate = () => {
			vm.logged = true;
			AuthenticateService.Login(vm.auth).then(function(response){
				vm.logged = false;
				if (response.success == false){
					console.log('Email ou senha inválidos, tente novamente.');
				}else{
					location.href = '/dashboard';
				}
			});
		};
	}

})();
