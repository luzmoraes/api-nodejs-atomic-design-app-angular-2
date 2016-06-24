(function(){
	'use strict';

	angular
		.module('app.users')
		.factory('UsersService', UsersService);

	function UsersService($http){
		return {
			add
		};

		function add(user){
			return $http.post('api/users', user);
		}
	}

})();