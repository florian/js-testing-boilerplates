module.exports = function(grunt) {
 
  // Add our custom tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
 
  // Project configuration.
  grunt.initConfig({
    mochaTest: {
      files: ['test/**/*.test.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'dot',
        require: 'test/common'
      }
    },
    watch: {
      test: {
        files: ['test/**/*.js', 'app/**/*.js'],
        tasks: 'test'
      }
    }
  });

  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('default', 'test');
}
