namespace IndexeringModule.Services {

    export interface IConfigService {
        configs: {};
    }

    export class ConfigService implements IConfigService {
        public configs: {};

        static $inject = ['$http', 'appConfig'];
        constructor(private $http: ng.IHttpService) {
        }
    }

}