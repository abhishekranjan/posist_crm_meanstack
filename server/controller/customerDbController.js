var mongoConnection = require('../helper/dbConnectionHelper.js');

exports.insertCustomer = function (req, res) {
    
     var customerName = req.query.custName;
            var customerMobile = req.query.custMobile;
            var customerPhone = req.query.custPhone;
            var customerEmail = req.query.custEmail;
            var customerAddress = req.query.addresses;

            console.log(customerName + ' ' + customerMobile + ' ' + customerPhone + ' ' + customerEmail);
            console.log(customerAddress)

            res.send("Customer inserted Successfully");
};//insertCustomer

exports.deleteCustomer = function (req, res) {
    
};//delete Customer

exports.updateCustomer = function (req, res) {
    
};// update Customer

exports.queryCustomer = function (req, res) {
    
};//query Customer