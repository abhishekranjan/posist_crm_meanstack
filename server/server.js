        var express = require('express');
        var app = express();
        var path = require('path');
        var bodyParser = require('body-parser');
        var sql = require('mssql');

        var config = {
            user: 'sa',
            password: 'Matter2',
            server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
            database: 'SampleDB'
        };


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

        app.post('/insert', function (req, res) {

            var studentid = req.body.id;
            var firstname = req.body.fname;
            var lastname = req.body.lname;
            var email = req.body.email;
            console.log(studentid + ' ' + firstname + ' ' + lastname + ' ' + email);




            sql.connect(config).then(function () {
                // Query 

                var sqlrequest = new sql.Request();

                var table = new sql.Table('tbl_Students'); // or temporary table, e.g. #temptable 
                table.create = false;
                table.columns.add('Studentid', sql.Int, {
                    nullable: false
                });
                table.columns.add('Firstname', sql.VarChar(200), {
                    nullable: false
                });
                table.columns.add('Lastname', sql.VarChar(200), {
                    nullable: true
                });
                table.columns.add('Email', sql.VarChar(100), {
                    nullable: true
                });
                table.rows.add(studentid, firstname, lastname, email);

                var request = new sql.Request();
                request.bulk(table, function (err, rowCount) {
                    console.log("row count value is"+rowCount);
                    console.log(err);
                    res.send(""+rowCount);
                });
                sql.close();

            });


            console.log("insert method in server");



        });



        //select all student

        app.get('/select', function (req, res) {
            sql.connect(config).then(function () {
                // Query 

                var sqlrequest = new sql.Request();
                sqlrequest.query('select * from tbl_Students').then(function (recordset) {
                    //  console.dir(recordset);
                    res.send(recordset);
                    sql.close();
                }).catch(function (err) {
                    console.log(err);
                });
            });
        });



        //update

        app.put('/update', function (req, res) {
            console.log(req.body);
            /*console.log(JSON.stringify(req.body));*/
            /*  console.log(req.body.id);
               console.log(req.body.fname);
               console.log(req.body.lname);
               console.log(req.body.email);   
              console.log("put method request");

              sql.connect(config).then(function () {
                  // Query 

                  var sqlrequest = new sql.Request();*/

            /* UPDATE [SampleDB].[dbo].[tbl_Students]
        SET Firstname='LarryPage',Lastname='Google',Email='LarryPage@gmail.com'
        WHERE Studentid=55;*/
            /*
                var sqlquery="UPDATE tbl_Students SET Firstname="+'\''+req.body.fname+'\''+","+"Lastname="+'\''+req.body.lname+'\''+","+"Email="+'\''+req.body.email+'\''+" WHERE  Studentid="+req.body.id;
                        console.log(sqlquery);

                        sqlrequest.query(sqlquery).then(function (recordset,rowcount) {
                            console.dir(recordset);
                            console.log(rowcount);
                            res.send(recordset);
                      sql.close();
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }); 
            */




            var connection1 = new sql.Connection(config, function (err) {
                console.log(err);
                var sqlquery1 = "UPDATE tbl_Students SET Firstname=@firstname,Lastname=@lastname,Email=@email WHERE  studentid=@studentid"
                var ps = new sql.PreparedStatement(connection1);
                ps.input('studentid', sql.Int);
                ps.input('firstname', sql.VarChar(200));
                ps.input('lastname', sql.VarChar(200));
                ps.input('email', sql.VarChar(100));




                ps.prepare(sqlquery1, function (err) {
                    console.log("prepare");
                    if (err) {
                        console.log(err);
                        return;
                    }
                    objParams = {
                        studentid: req.body.id,
                        firstname: req.body.fname,
                        lastname: req.body.lname,
                        email: req.body.email
                    };
                    /* ps.execute({studentid: 66}, function(err, recordset,affected)     {                                               */
                    ps.execute(objParams, function (err, recordset, affected) {
                        console.log("execute");
                        console.log(err);
                        console.dir(recordset);
                        console.dir(affected);
                        ps.unprepare(function (err) {});
                        res.send('' + affected);

                    });
                });

            });
        });


        //delete record by id

        app.post('/delete', function (req, res) {
            console.log("delete method request");
            var connection1 = new sql.Connection(config, function (err) {
                console.log(err);
                console.log("req.body of delete");
                console.log(req.body.id);
                console.dir(req.body);

                var sqlquery1 = "delete from tbl_Students where  studentid=@studentid"
                var ps = new sql.PreparedStatement(connection1);
                ps.input('studentid', sql.Int);
                ps.prepare(sqlquery1, function (err) {
                    console.log("prepare");
                    if (err) {
                        console.log(err);
                        return;
                    }
                    objParams = {
                        studentid: req.body.id
                    };
                    /* ps.execute({studentid: 66}, function(err, recordset,affected)     {                                               */
                    ps.execute(objParams, function (err, recordset, affected) {
                        console.log("execute");
                        console.log(err);
                        console.dir(recordset);
                        console.dir(affected);
                        res.send(""+affected);
                        ps.unprepare(function (err) {});
                    });
                });
            });
        });






        app.listen(2233, function () {
            console.log("server is running on port 2233");
        });