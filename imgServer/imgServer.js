var http = require('http'); //调用nodejs自带的http对象

var f1 = require('./img');

//用http对象调用createServer方法来监听 本地8000端口

//createServer方法中有两个内置参数对象，其中request为请求对象，response为响应体

http.createServer(function(request, response) {
	console.log(request.url)
	//响应体写出头部信息

	response.writeHead(200, {
		'Content-Type': 'image/jpeg'
	});

	if(request.url === '/')return
	f1.r1('.' + request.url, response);

}).listen(9999);

//输出内容到控制台

console.log('localhost:9999');
