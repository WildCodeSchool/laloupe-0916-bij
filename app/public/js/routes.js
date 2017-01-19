const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm',
        })
        .when('/mention', {
          templateUrl: 'views/mention.html'
        })
        .when('/credit', {
          templateUrl: 'views/credit.html'
        })
        .when('/parcours', {
            templateUrl: 'views/parcours.html',
            controller: 'parcoursController',
            controllerAs: 'vm'
        })
        .when('/index1', {
            templateUrl: 'views/pres1/index1.html',
            controller: 'presOneController',
            controllerAs: 'vm'
        })
        .when('/index2', {
            templateUrl: 'views/pres2/index2.html',
            controller: 'presTwoController',
            controllerAs: 'vm'
        })
        .when('/index3', {
            templateUrl: 'views/pres3/index3.html',
            controller: 'presThreeController',
            controllerAs: 'vm'
        })
        .when('/index4', {
            templateUrl: 'views/pres4/index4.html',
            controller: 'presFourController',
            controllerAs: 'vm'
        })
        .when('/index5', {
            templateUrl: 'views/pres5/index5.html',
            controller: 'presFiveController',
            controllerAs: 'vm'
        })
        .when('/index6', {
            templateUrl: 'views/pres6/index6.html',
            controller: 'presSixController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
};
