module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine: {
        yourTask: {
          src:['js/jquery.js','js/*.js'],
          options: {
            specs: 'js_tests/*Spec.js',
          }
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-bower-concat');

  // Default task(s).
  grunt.registerTask('default', ['jasmine']);

}
