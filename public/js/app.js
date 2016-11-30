angular.module('app', ['ngRoute'])
        .controller('mainController', mainController)
        .controller('presoneController', presoneController)
        .controller('navbarController', navbarController)
        .config(routes)
        ;
