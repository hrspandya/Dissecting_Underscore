module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/* <%= pkg.name || javascript %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        
        serve: {
            'path': 'index.html',            
            options: {
                port: 9090
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-serve');

    // connect server task
    grunt.registerTask('server', ['serve']);

};





