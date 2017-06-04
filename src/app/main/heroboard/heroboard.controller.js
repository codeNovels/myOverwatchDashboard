(function ()
{
    'use strict';

    angular
        .module('app.heroboard')
        .controller('HeroboardController', HeroboardController);

    /** @ngInject */
    function HeroboardController(Data)
    {
        var vm = this;

        // Data
        vm.helloText = Data.data.helloText;

        // Methods

        //////////
    }
})();
