module.exports = function(grunt) {
     
  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      copy: {
        component: {
            src: './src/components/wire-component.js',
            dest: './dist/wire-component.js'
        },
        package: {
          src: './package.component.json',
          dest: './dist/package.json'
        },        
        readme: {
          src: './README.component.md',
          dest: './dist/README.component.md'
        },
      }
      
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};