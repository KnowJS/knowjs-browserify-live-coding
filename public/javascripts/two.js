var swig = require('swig');
var $ = require('jQuery');

module.exports.go = function () {
	var output = swig.render('<div>{{myvariable}} cuz we wrote stuff</div>', {
		locals: {
			myvariable: 'Yo, we crazy'
		}
	});
	console.log('we done gone already!');
	console.log(output);

	$(document.body).append(output);
}
