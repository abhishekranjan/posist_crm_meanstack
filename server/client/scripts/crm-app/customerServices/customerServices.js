define([], function () {
    "use strict";

    function customerServices($http, $q, $location, toaster) {
        return {
            addCustomer: addCustomer,
            deleteCustomer: deleteCustomer,
            updateCustomer: updateCustomer,
            getAllCustomer: getAllCustomer
        }

        function addCustomer() {

            console.log(this.customer);

            console.log("add Customer working");
            console.log($location.protocol() + "://" + $location.host() + ":" + $location.port())
            var uri = $location.protocol() + "://" + $location.host() + ":" + $location.port();

            var resultDefer = $q.defer();
            $http({
                method: 'post',
                url: uri + "/insertCustomer",
                params: this.customer
            }).then(function (response) {
                resultDefer.resolve(response);
                toaster.pop("Success", "Customer Added Successfully");
            }, function (error) {
                resultDefer.reject(data);
                toaster.pop("error", data);
            });

            // return resultDefer.promise;


        } //addCustomer

        function deleteCustomer() {

            console.log("add Customer working");


        } //deleteCustomer

        function updateCustomer() {

            console.log("add Customer working");


        } //updateCustomer

        function getAllCustomer() {

            console.log("add Customer working");


        } //getAllCustomer




    } //reportService
    customerServices.$inject = ["$http", "$q", "$location", "toaster"];

    return customerServices;

});
