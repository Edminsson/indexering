export class mainController {
    constructor(private $scope) {
        this.$scope.titel = 'Min app';
    }
}

angular.module('app')
.controller('mainController', mainController);