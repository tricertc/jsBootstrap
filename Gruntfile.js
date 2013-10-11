module.exports = function (grunt) {

  //
  // configure task modules
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      dev: {
        options: {
          base: 'public',
          port: 8888,
          keepalive: true
        }
      }
    },
    jasmine: {
      src: 'public/js/**/*.js',
      options: {
        specs: 'tests/specs/**/*.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    open: {
      dev: {
        path: 'http://127.0.0.1:<%= connect.dev.options.port%>/index.html',
        app: 'chrome'
      }
    }
  });

  //
  // load task modules
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');

  //
  // register tasks
  grunt.registerTask('server', ['open:dev', 'connect:dev']);
  grunt.registerTask('test', ['jshint', 'jasmine']);
};