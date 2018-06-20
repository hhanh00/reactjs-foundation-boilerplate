module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          loadPath: ['node_modules/foundation-sites/scss'],
          style: 'compressed'
        },
        files: {
          'dist/styles.css': 'styles.scss'
        }
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};

