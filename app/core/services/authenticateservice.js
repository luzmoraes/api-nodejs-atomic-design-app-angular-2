(function(){
	'use strict';

	angular.module('app.core')
	.factory('AuthenticateService', AuthenticateService);

	function AuthenticateService(){
		const services = {
			Login
		  , SetCredentials
		  , ClearCredentials
		};

		return services;

		function Login(){}

		function SetCredentials(callback){
			return callback({
				name: 'Anderson Moraes'
			  , email: 'anderson@ycloud.com.br'
			});
		}

		function ClearCredentials(){}
	}
})();