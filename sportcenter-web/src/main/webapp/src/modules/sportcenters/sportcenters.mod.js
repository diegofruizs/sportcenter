(function (ng) {
    
    var mod = ng.module("sportcenterModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/sportcenters/';
            
            $urlRouterProvider.otherwise("/sportcenterList");
            
            $stateProvider.state('sportcentersList', {
                
                url: '/sportcenter/list',
                views: {
                    'mainView': {
                        templateUrl: basePath + 'sportcenters.list.html',
                        controller: 'sportcenterCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
