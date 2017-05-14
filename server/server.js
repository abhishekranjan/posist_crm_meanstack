        var express = require('express');
        var app = express();
        var path = require('path');
        var bodyParser = require('body-parser');

        var customerDbController = require('./controller/customerDbController.js');

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

        app.post('/insertCustomer', function (req, res) {
            
            customerDbController.insertCustomer(req, res);
        });



        //select

        app.get('/select', function (req, res) {

            customerDbController.queryCustomer(req, res);

        });



        //update

        app.put('/update', function (req, res) {

            customerDbController.updateCustomer(req, res);
        });


        //delete 

        app.post('/delete', function (req, res) {

            customerDbController.deleteCustomer(req, res);

        });






        app.listen(2233, function () {
            console.log("server is running on port 2233");
        });
