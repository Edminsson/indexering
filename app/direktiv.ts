module IndexeringModule {

    export interface IAvvikelseScopeObject {
        isKlar: boolean,
        bild: string
    }

    export interface IAvvikelseScope extends ng.IScope {
        numreringInfo: IAvvikelseScopeObject;
    }

    export function AvvikelseScrollDirective($timeout, $window) {

        return {
            scope: {
                numreringInfo: '=avvikelseScroll'
            },
            link: (scope: IAvvikelseScope, element: ng.IAugmentedJQuery, attrs) => {
                var vyportElement = element[0];
                var avstandFromToppen: number;


                var getScrollTopForVisibility = (linkElement: HTMLElement): number => {
                    var vyportHojd = vyportElement.clientHeight;
                    //var vyportScrollTop = vyportElement.scrollTop;
                    var vyportscrollHeight = vyportElement.scrollHeight;
                    var elementOffsetTop = linkElement.offsetTop;
                    //var nodeRelativePosition = elementOffsetTop - vyportScrollTop;
                    var scrollTopForVisibility: number;
                    
                    avstandFromToppen = Math.floor(vyportHojd * 0.33);
                    scrollTopForVisibility = elementOffsetTop - avstandFromToppen;

                    if (scrollTopForVisibility > vyportscrollHeight - vyportHojd) {
                        scrollTopForVisibility = vyportscrollHeight - vyportHojd;
                    }

                    return scrollTopForVisibility;
                }



                var scrollToAvvikelse = () => {
                }

                $window.addEventListener('resize', scrollToAvvikelse, false);

                scope.$watch('numreringInfo.isKlar', function (newValue, oldValue) {
                    $timeout(function () {
                        scrollToAvvikelse();
                    },500);
                });

            }
        };
    }

}