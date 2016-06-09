﻿(function () {
    'use strict';

    function categoryListController(dataService, $stateParams) {
        var vm = this;
        vm._categories = [];
        vm.search = { $: $stateParams.queryString };
        vm.hoverDim = function() {
            $('#FocusSection').addClass('dim');
        };
        vm.hoverOut = function() {
            $('#FocusSection').removeClass('dim');
        }

        function getCategories() {
            return dataService.getCategories()
                .then(function (data) {
                    vm._categories = data.data.Data;
                    return vm._categories;
                });
        };


        function activate() {
            return getCategories().then(function () {

            });
        };


        activate();

    };


    angular.module('ProductCatalog').controller('categoryListController', categoryListController);

    categoryListController.$inject = ['dataService', '$stateParams'];



})();