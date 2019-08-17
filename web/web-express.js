var express = require("express");
var app = express();
// app.use(express.static(__dirname)); //정적 파일들이 있는 위치를 지정

app.use(express.static(__dirname + "/login_form"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/login_form/login_form.html");
});

app.listen(8080, function() {
	console.log("Example app listening on port 8080!");
});
