'use strict';
var stripCssComments = require('strip-css-comments');

module.exports = function (grunt) {
	grunt.registerMultiTask('stripCssComments', 'Strip comments from CSS', function () {
		this.files.forEach(function (el) {
			grunt.file.write(el.dest, stripCssComments(grunt.file.read(el.src)));
		});
	});
};
