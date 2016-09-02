module IndexeringModule.Extra {

    export class AnnanService implements IConfigService {
        public configs: {};

        static $inject = ['$http', 'appConfig'];
        constructor(private $http: ng.IHttpService) {
        }
    }

}