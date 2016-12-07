angular.module('app', ['ngRoute', 'ngAnimate'])
        .controller('mainController', mainController)
        .controller('presoneController', presoneController)
        .controller('parcoursController', parcoursController)
        .controller('navbarController', navbarController)
        .controller('parcoursController', parcoursController)
        .directive('directiveZoom', directiveZoom)
        .config(routes);
