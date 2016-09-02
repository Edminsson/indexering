namespace IndexeringModule.Controllers {

    import services = IndexeringModule.Services;
    import extra = IndexeringModule.Extra;

    export class MainController {
        constructor(private $scope) {
            this.$scope.titel = 'Min app';
        }
    }

    angular.module('app')
    .controller('mainController', MainController);

}
