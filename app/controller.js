"use strict";
var mainController = (function () {
    function mainController($scope) {
        this.$scope = $scope;
        this.$scope.titel = 'Min app';
    }
    return mainController;
}());
exports.mainController = mainController;
angular.module('app')
    .controller('mainController', mainController);
//# sourceMappingURL=controller.js.map