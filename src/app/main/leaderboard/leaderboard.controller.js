(function ()
{
    'use strict';

    angular
        .module('app.leaderboard')
        .controller('LeaderboardController', LeaderboardController);

    /** @ngInject */
    function LeaderboardController(Data)
    {
        var vm = this;

        // Data
        vm.helloText = Data.data.helloText;

        // Methods

        //////////
    }
})();
