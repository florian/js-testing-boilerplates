module.exports = function (grunt) {

	grunt.initConfig({

		mocha: {
			all: {
				src: 'spec/index.html',
				run: true
			}
		},

		watch: {
			test: {
				files: ['spec/*'],
				tasks: 'test'
			}
		}

	});

	grunt.loadNpmTasks('grunt-mocha');
	grunt.registerTask('test', 'mocha');

};