    define([], function () {

        function customerController($scope, $http, toaster, customerServices) {

            

            $scope.addCustomer = customerServices.addCustomer;
            $scope.deleteCustomer = customerServices.deleteCustomer;
            $scope.updateCustomer = customerServices.updateCustomer;
            $scope.getAllCustomer =

                $scope.getAllCustomer = function () {
                    var promise = customerServices.getAllCustomer();
                    
                
                    promise.then(function (data) {
                        console.log(data);
                        $scope.customers=data;
                    }, function (error) {
                        console.error(data);
                    })
                    console.log($scope.customers);
                }

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
