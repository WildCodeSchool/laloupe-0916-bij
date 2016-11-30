const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/parcours', {
            templateUrl: 'views/parcours.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}
