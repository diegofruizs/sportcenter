(function (ng) {
    var mod = ng.module("trainerModule");
    mod.constant("trainersContext", "api/trainers");
    mod.controller('trainerCtrl', ['$scope', '$http', 'trainersContext',
        function ($scope, $http, trainersContext) {
            $http.get('data/trainers.json').then(function (response) {
                $scope.trainersRecords = response.data;
            });
        }
    ]);
}
)(window.angular);