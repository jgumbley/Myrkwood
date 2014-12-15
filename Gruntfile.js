'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
        install: { }
      },
    jasmine: {
        yourTask: {
          src:['bower_components/jquery/dist/jquery.js',
               'bower_components/bacon/dist/Bacon.js',
               'bower_components/ancient-oak/dist/ancient-oak-*min.js',
               'js/*.js'
               ],
          options: {
            specs: 'js_tests/*Spec.js',
          }
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-bower-concat');

  // Default task(s).
  grunt.registerTask('default', ['bower:install', 'jasmine']);

}
