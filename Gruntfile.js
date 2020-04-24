module.exports = function(grunt) {

  grunt.initConfig({
    bower: {
      dev: {
        dest: 'themes/default/assets/vendor',
        js_dest: 'themes/default/assets/js/vendor',
        css_dest: 'themes/default/assets/css/vendor',
        options: {
          keepExpandedHierarchy: false,
          packageSpecific: {
            bootstrap: {
              files: [ 'dist/css/bootstrap.css', 'dist/js/bootstrap.js' ]
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');

  grunt.registerTask('default', ['bower']);
};