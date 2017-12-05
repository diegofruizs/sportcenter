(function (ng) {
    var mod = ng.module("sportcenterModule");
    mod.constant("sportcenterContext", "api/sportcenter");
    mod.controller('sportcenterCtrl', ['$scope', '$http', 'sportcenterContext',
        function ($scope, $http, sportcenterContext) {
            $http.get('data/sportcenters.json').then(function (response) {
                $scope.sportcenterRecords = response.data;
            });
        }
    ]);
}
)(window.angular);