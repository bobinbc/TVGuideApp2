'use strict';

tvguide.controller('GeofencesController', ['$scope', '$http',
    function ($scope, $http) {

//        $scope.InitializePage = function () {

            var now = new Date().toISOString();

            $.ajax({
                url: 'http://api.rovicorp.com/TVlistings/v9/listings/gridschedule/70886/info?apikey=j3p5tfznqqppd8ucd99mtcf9&sig=sig&locale=en-CA&startdate=' + now + '&duration=60&&format=json&includechannelimages=true',
                dataType: 'JSONP',
                jsonpCallback: 'callback',
                type: 'GET',
                success: function (data) {
                    $scope.dataNow = data.GridScheduleResult;
                    $scope.$apply(function () {
                        $scope.dataNow = data.GridScheduleResult;
                    });

                    console.log(data.GridScheduleResult.Name);
                    console.log(data.GridScheduleResult.GridChannels[0]);
                    console.log(data.GridScheduleResult.GridChannels[0].ChannelImages[0].ImageUrl);
                },
                error: function (data) {
                    console.log(data);
                }
            })
//        };

//            $scope.$watch('channel.Airing[0].AiringTime', function () {
//    $scope.user.User.DateOfBirth = $filter('date')(newValue, 'yyyy-MM-dd'); // Or whatever format your real model should use
//});
//
//$scope.$watch('user.User.DateOfBirth', function (newValue) {
//    $scope.myDateInput = $filter('date')(newValue, 'yyyy-MM-dd'); // Or whatever format your input should use
//});

//        $scope.convertDate = function (dating) {
//            var d = Date.parse(dating);
//
//        };
    }]);
