var myApp = angular.module('myApp', []);

myApp.config(function myAppConfig() {
    console.log('myApp config');
});

myApp.controller('myAppController', ["$scope", function myAppController($scope) {
    $scope.appName = 'app-FOO!';
}]);