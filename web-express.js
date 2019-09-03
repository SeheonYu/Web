var express = require("express");
var app = express();

var mysql_dbc = require(__dirname + "/databases/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

var crypto = require("crypto");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + "/web"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/web/sign_in.html");
});

app.get("/signup", function(req, res) {
	res.sendFile(__dirname + "/web/sign_up.html");
});

app.get("/board", function(req, res) {
	res.sendFile(__dirname + "/web/community_board.html");
});

app.listen(8080, function() {
	console.log("Start server on port 8080");
});

app.post("/signup/send", (req, res) => {
	var email = req.body.email;
	var nickname = req.body.nickname;
	var pswd = req.body.pswd;
	var name = req.body.name;

	var salt = Math.round(new Date().valueOf() * Math.random()) + "";
	var authentication_string = crypto
		.createHash("sha512")
		.update(pswd + salt)
		.digest("hex");
	var query =
		"INSERT INTO user(email, authentication_string, name, nickname, salt) VALUES('" +
		email +
		"', '" +
		authentication_string +
		"', '" +
		name +
		"', '" +
		nickname +
		"', " +
		salt +
		");";

	connection.query(query, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Success: " + query);
		}
	});

	res.sendFile(__dirname + "/web/sign_in.html");
});

app.get("/mysql/email", (req, res) => {
	var query = "select * from user";
	connection.query(query, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result[0]["email"]);
		}
	});
});
