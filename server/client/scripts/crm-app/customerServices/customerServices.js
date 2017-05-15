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

            console.log("add Customer ");
            console.log($location.protocol() + "://" + $location.host() + ":" + $location.port())
            var uri = $location.protocol() + "://" + $location.host() + ":" + $location.port();

            var resultDefer = $q.defer();
            $http({
                method: 'post',
                url: uri + "/customer/insertCustomer",
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

            console.log("delete customer");


        } //deleteCustomer

        function updateCustomer() {

            console.log("update customer");


        } //updateCustomer

        function getAllCustomer() {
           
            var resultDefer = $q.defer();
            $http.get('/scripts/crm-app/customerServices/customerDummyData.json').then(function (data) {
                console.log(data);
                resultDefer.resolve(data);
              
            });

            console.log("get all customer");

           return resultDefer.promise;;
        } //getAllCustomer




    } //reportService
    customerServices.$inject = ["$http", "$q", "$location", "toaster"];

    return customerServices;

});
