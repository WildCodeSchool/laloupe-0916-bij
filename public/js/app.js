angular.module('app', ['ngRoute'])
        .controller('mainController', mainController)
        .controller('presoneController', presoneController)
        .controller('parcoursController', parcoursController)
        .controller('navbarController', navbarController)
        .config(routes)
        ;
