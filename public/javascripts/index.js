var $ = require('jQuery');
var two = require('./two');

$(document).ready(function () {
	var dnode = require('dnode');
	var shoe = require('shoe');
	var stream = shoe('/dnode');

	var d = dnode();
	d.on('remote', function (remote) {
			global.remote = remote;
			remote.log('This client has been acting crazy!', function (err, res) {
				console.log('that servers said hhhhuuuh: ', res);
			});
	});
	d.pipe(stream).pipe(d);
	two.go();
});
