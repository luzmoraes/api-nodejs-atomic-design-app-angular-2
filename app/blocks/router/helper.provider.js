/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider)
        .run(appRun);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        let config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        $locationProvider.html5Mode(true);

        this.configure = (cfg) => angular.extend(config, cfg);

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$location', '$rootScope', '$state'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state) {
            let handlingStateChangeError = false
              , hasOtherwise = false
              , stateCounts = {
                    errors: 0,
                    changes: 0
                }
              ;

            const service = {
                configureStates: configureStates
              , getStates: getStates
              , stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach((state) => {
                    state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
                    if (handlingStateChangeError) return;
                    stateCounts.errors++;
                    handlingStateChangeError = true;
                    let destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) || 'unknown target';
                    let msg = 'Error routing to ' + destination + '. ' + (error.data || '') + '. <br/>' + (error.statusText || '') + ': ' + (error.status || '');
                    $location.path('/');
                });
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
                    stateCounts.changes++;
                    handlingStateChangeError = false;
                    let title = config.docTitle + ' ' + (toState.title || '');
                    $rootScope.title = title; // data bind to <title>
                });
            }
        }
    }

    // function appRun($rootScope, $location, $http, AuthenticationService) {
    function appRun($rootScope, $location, AuthenticateService) {

        $rootScope.$on('$locationChangeStart', (event, next, current) => {

            let loggedIn = {}
              , loggedInStatus = false
              ;

            AuthenticateService.SetCredentials( (response) => {
                if (Object.keys(response).length > 0){
                    loggedIn = response;
                    loggedInStatus = true;
                }

                $rootScope.globals = loggedIn;

                let restrictedPage = checkUrl($location.path());

                if (restrictedPage && !loggedInStatus) $location.path('/');
            });

        });

        function checkUrl(urlAtual){
            const arr_urls_free = ['/', '/home'];
            let restrictedPage = true;

            angular.forEach(arr_urls_free, (url, key) => {
                if ( url === urlAtual ) restrictedPage = false;
            });

            return restrictedPage;
        }
    }

})();