    define([], function () {

        function customerController($scope, $http, toaster, customerServices) {

            console.log(customerServices);

            $scope.addCustomer = customerServices.addCustomer;
            $scope.deleteCustomer = customerServices.deleteCustomer;
            $scope.updateCustomer = customerServices.updateCustomer;
            $scope.getAllCustomer = customerServices.getAllCustomer;

            $scope.customer = {};
            $scope.customer.addresses = [{
                flat: "",
                street: "",
                state: "",
                pinCode: ""
                }];


            $scope.addNewAddress = function () {
                $scope.customer.addresses.push({
                    flat: "",
                    street: "",
                    state: "",
                    pinCode: ""
                });
            };
        }

        customerController.$inject = ['$scope', '$http', 'toaster', 'customerServices'];
        return customerController;
    });
