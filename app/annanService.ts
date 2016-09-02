namespace IndexeringModule.Extra {

    export class AnnanService implements IndexeringModule.Services.IConfigService {
        public configs: {};

        static $inject = ['$http', 'appConfig'];
        constructor(private $http: ng.IHttpService) {
        }
    }

}