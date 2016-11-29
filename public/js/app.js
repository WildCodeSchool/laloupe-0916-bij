angular.module('app', ['ngRoute'])
        .controller('mainController', mainController)
        .controller('navbarController', navbarController)
        .config(routes)
        ;
