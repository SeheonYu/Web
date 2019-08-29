var express = require("express");
var app = express();

app.use(express.static("C:/Users/tpgjs/Documents/Programming/Web/web"));

app.get("/", function(req, res) {
	res.sendFile("C:/Users/tpgjs/Documents/Programming/Web/web/sign_in.html");
});

app.get("/signup", function(req, res) {
	res.sendFile("C:/Users/tpgjs/Documents/Programming/Web/web/sign_up.html");
});

app.get("/board", function(req, res) {
	res.sendFile("");
});

app.listen(8080, function() {
	console.log("Example app listening on port 8080!");
});
