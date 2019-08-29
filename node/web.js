var http = require("http");

http
	.createServer(function(req, res) {
		res.statusCode = 200; // 성공 상태 코드
		res.setHeader("Content-Type", "text/html"); // header 설정
		res.write("<h1>Hello Node!</h1>"); // body에 정보 탑재
		// res.end("<p>Hello Server!</p>"); // 정보 탑재 후 브라우저로 전송
		res.write("<p>Hello Server!</p>");
		res.end();
	})
	.listen(9000);

console.log("9000번 포트에서 서버 대기 중입니다!");
