(function ()
{
    'use strict';

    angular
        .module('app.patchnote')
        .controller('PatchnoteController', PatchnoteController);

    /** @ngInject */
    function PatchnoteController(Data)
    {
        var vm = this;

        // Data
        vm.helloText = Data.data.helloText;

        // Methods

        //////////
    }
})();
