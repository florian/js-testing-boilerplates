module.exports = function (grunt) {

	grunt.initConfig({

		qunit: {
			all: ['spec/index.html']
		},

		watch: {
			test: {
				files: ['spec/*'],
				tasks: 'test'
			}
		}

	});

	grunt.registerTask('test', 'qunit');

};