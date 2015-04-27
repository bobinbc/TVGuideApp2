'use strict';

tvguide.controller('TVGuideController', ['$scope', '$http',
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
    }]);
