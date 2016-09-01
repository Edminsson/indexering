export class MainController {
    constructor(private $scope) {
        this.$scope.titel = 'Min app';
    }
}

angular.module('app')
.controller('mainController', MainController);