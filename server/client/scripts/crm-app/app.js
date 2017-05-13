var crmApp = angular.module('crm-app', ['ui.router', 'toaster'])
crmApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('/', {
            url: '/select',
            templateUrl: 'scripts/crm-app/crm-curd/select.html'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'scripts/crm-app/crm-curd/create.html'
        }).state('update', {
            url: '/update',
            templateUrl: 'scripts/crm-app/crm-curd/update.html'
        }).state('delete', {
            url: '/delete',
            templateUrl: 'scripts/crm-app/crm-curd/delete.html'
        });

});
crmApp.controller("customerController", function ($scope, $http, toaster) {

    $scope.addresses = [{
        flat: "",
            street: "",
            state: "",
            pinCode: ""
    }];


    $scope.addNewAddress = function () {        
        $scope.addresses.push({
            flat: "",
            street: "",
            state: "",
            pinCode: ""
        });
    };


   

    $scope.getCustomerList = function () {};


    $scope.insert_customer = function () {};


    $scope.update_customer = function () {};



    $scope.deletebyid = function () {

    };

});
