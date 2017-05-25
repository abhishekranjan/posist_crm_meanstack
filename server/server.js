        var express = require('express');
        var app = express();
        var path = require('path');
        var bodyParser = require('body-parser');
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/posist_crm_db');


        //console.log(mongoose);



        var customerDbController = require('./controller/customerDbController.js');

        //added comment in develop branch to check merge        
        app.use(bodyParser.json()); // support json encoded bodies
        app.use(bodyParser.urlencoded({
            extended: true
        })); // support encoded bodies



        /*app.use('/static', express.static('/views'));*/
        console.log(__dirname);
        app.use(express.static(__dirname + '/client'));
        console.log(__dirname);
        app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname + '/client/index.html'));
            /*res.redirect('index.html');*/
        });





        //insert

        app.post('/customer/insertCustomer', function (req, res) {

            customerDbController.insertCustomer(req, res);
        });



        //select

        app.get('/customer/select', function (req, res) {

            customerDbController.queryCustomer(req, res);

        });



        //update

        app.put('/customer/update', function (req, res) {

            customerDbController.updateCustomer(req, res);
        });


        //delete 

        app.post('/customer/delete', function (req, res) {

            customerDbController.deleteCustomer(req, res);

        });






        app.listen(2233, function () {
            console.log("server is running on port 2233");
        });
