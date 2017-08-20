var myApp = angular.module("myApp", ['ui.router', 'ngResource', 'ui.bootstrap']);

myApp.controller("AboutController", AboutController);
myApp.controller("AccountController", AccountController);
myApp.controller("ConfirmEmailController", ConfirmEmailController);
myApp.controller("ExternalRegisterController", ExternalRegisterController);
myApp.controller("HomeController", HomeController);
myApp.controller("LoginController", LoginController);
myApp.controller("RegisterController", RegisterController);
myApp.controller("SecretController", SecretController);

myApp.service("$accountService", AccountService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
        })
        .state('secret', {
            url: '/secret',
            templateUrl: '/ngApp/views/secret.html',
            controller: SecretController,
            controllerAs: 'controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: LoginController,
            controllerAs: 'controller'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: RegisterController,
            controllerAs: 'controller'
        })
        .state('externalRegister', {
            url: '/externalRegister',
            templateUrl: '/ngApp/views/externalRegister.html',
            controller: ExternalRegisterController,
            controllerAs: 'controller'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise('/notFound');

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});

angular.module('myApp')
       .factory('authInterceptor', ($q, $window, $location) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        }));

angular.module('myApp').config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});


//namespace Test01 {

//    angular.module('Test01', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
//        $stateProvider: ng.ui.IStateProvider,
//        $urlRouterProvider: ng.ui.IUrlRouterProvider,
//        $locationProvider: ng.ILocationProvider
//    ) => {
//        // Define routes
//        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: '/ngApp/views/home.html',
//                controller: Test01.Controllers.HomeController,
//                controllerAs: 'controller'
//            })
//            .state('secret', {
//                url: '/secret',
//                templateUrl: '/ngApp/views/secret.html',
//                controller: Test01.Controllers.SecretController,
//                controllerAs: 'controller'
//            })
//            .state('login', {
//                url: '/login',
//                templateUrl: '/ngApp/views/login.html',
//                controller: Test01.Controllers.LoginController,
//                controllerAs: 'controller'
//            })
//            .state('register', {
//                url: '/register',
//                templateUrl: '/ngApp/views/register.html',
//                controller: Test01.Controllers.RegisterController,
//                controllerAs: 'controller'
//            })
//            .state('externalRegister', {
//                url: '/externalRegister',
//                templateUrl: '/ngApp/views/externalRegister.html',
//                controller: Test01.Controllers.ExternalRegisterController,
//                controllerAs: 'controller'
//            }) 
//            .state('about', {
//                url: '/about',
//                templateUrl: '/ngApp/views/about.html',
//                controller: Test01.Controllers.AboutController,
//                controllerAs: 'controller'
//            })
//            .state('notFound', {
//                url: '/notFound',
//                templateUrl: '/ngApp/views/notFound.html'
//            });

//        // Handle request for non-existent route
//        $urlRouterProvider.otherwise('/notFound');

//        // Enable HTML5 navigation
//        $locationProvider.html5Mode(true);
//    });

    
//    angular.module('Test01').factory('authInterceptor', (
//        $q: ng.IQService,
//        $window: ng.IWindowService,
//        $location: ng.ILocationService
//    ) =>
//        ({
//            request: function (config) {
//                config.headers = config.headers || {};
//                config.headers['X-Requested-With'] = 'XMLHttpRequest';
//                return config;
//            },
//            responseError: function (rejection) {
//                if (rejection.status === 401 || rejection.status === 403) {
//                    $location.path('/login');
//                }
//                return $q.reject(rejection);
//            }
//        })
//    );

//    angular.module('Test01').config(function ($httpProvider) {
//        $httpProvider.interceptors.push('authInterceptor');
//    });

    

//}