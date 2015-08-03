angular.module('wildEnglish', ['ui.bootstrap','ui.utils','ui.router', 'ui.calendar', 'ngAnimate','restangular', 'plangular'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider, plangularConfigProvider) {

    RestangularProvider.setBaseUrl('https://www.googleapis.com/calendar/v3/calendars/5hdm5prrvpkfl6h749ptci39eg@group.calendar.google.com');

      plangularConfigProvider.clientId = '1ecb2d2bd0cf3fcd6ef73a91f7685b6d';
      
    $stateProvider
     .state('main', {
        url: '/',
        templateUrl: 'states/main.html',
        controller: 'MainCtrl',
        controllerAs: 'app',
      })
    /* Add New States Above */
    $urlRouterProvider.otherwise('/main');

})

.run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
