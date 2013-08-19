var App = angular.module('myFramework', []);

App.config(function AppConfig($routeProvider) {

    $routeProvider
        .when('/', {
            redirectTo: '/apps'
        })
        .when('/apps', {
            templateUrl: '/templates/apps.html'
        })
        .when('/apps/:token', {
            templateUrl: '/templates/app.html'
        })

        .otherwise({
            redirectTo: '/apps'
        });

    console.log('framework config');
});

App.run(function AppRun() {
    console.log('running framework');
});


// helper service to fetch scripts and include them in the page...
App.service('HelperService', [function HelperService() {
    var includeJavaScript = function includeJavaScript(scriptFile, callback) {
        // ... snip, testing if argument is string, or array ... for the ease lets say its a single script: string
        $.when(
            $.getScript(scriptFile)
        ).done(function cb() {
                callback();
        });
    };

    return {
        includeJavaScript: includeJavaScript
    };
}]);


// controller to load an application
App.controller('framework.appController', ['$scope', '$routeParams', 'HelperService', function appController($scope, $routeParams, HelperService) {
    $scope.app = {
        appTemplate: '/templates/loading.html'
    };

    var bootApp = function bootApplication() {
        $scope.app.name = $routeParams.token;
        var appServiceUrl = '/apps/' + $scope.app.name + '/' + $scope.app.name + '.js';

        HelperService.includeJavaScript(appServiceUrl, function callback() {
            angular.bootstrap($('#application-container'), [$scope.app.name]);
            appPreloaded();
        });
    };

    var appPreloaded = function appPreloaded() {

        console.warn('loaded!', arguments);
        // application preloaded, scripts are included, fire it up...
        $scope.app.appTemplate = '/apps/' + $scope.app.name + '/views/app.html';
    };

    bootApp();
}]);
