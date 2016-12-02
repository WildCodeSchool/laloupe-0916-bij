const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm',
        })
        .when('/parcours', {
            templateUrl: 'views/parcours.html',
            controller: 'parcoursController',
            controllerAs: 'vm'
        })
        .when('/index1', {
            templateUrl: 'views/pres1/index1.html',
            controller: 'presoneController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
};
