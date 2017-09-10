var myApp = angular.module("myApp", [ "ui.router", "ngResource" ]);
myApp.controller("MainController", MainController);
myApp.service("$employeeService", EmployeeService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/main.html",
            controller: MainController,
            controllerAs: "controller"
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise("/notFound");

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});
