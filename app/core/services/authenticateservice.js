(function(){
	'use strict';

	angular.module('app.core')
	.factory('AuthenticateService', AuthenticateService);

	function AuthenticateService($http){

		const _URI = 'http://localhost:7200'
		    , services = {
							Login
		  			, SetCredentials
		  			, ClearCredentials
					}
				;

		return services;

		function Login(data){
			return $http.post(_URI+'/api/auth/login', user);
		}

		function SetCredentials(callback){
			return callback({
				name: 'Anderson Moraes'
			  , email: 'anderson@ycloud.com.br'
			});
		}

		function ClearCredentials(){}
	}
})();
