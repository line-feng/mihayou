var fs = require('fs'); //调用nodejs自带的fs对象

module.exports = {

	r1: function(path, res) {

		//调用fs对象读指定路径的文件内容。

		fs.readFile(path, 'binary', function(err, filecon) {

			if (err) {

				console.log(err);

			} else {

				res.write(filecon, 'binary');

				res.end();

			}

		});

	}

}
