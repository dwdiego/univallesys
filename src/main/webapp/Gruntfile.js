"use strict"
module.exports = function(grunt) {

    // Configuração das tarefas
    // ---------------------------------------
    grunt.initConfig({

        // Tarefa watch
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "js/*.js",
                tasks: ["uglify", "jshint"]
            },
            sass: {
                files: "sass/*.{scss,sass}",
                tasks: "sass"
            },
            html: {
                files: "/*.html"
            }
        },

        // Tarefa connect
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        },
        
        jshint: {
            all: ['Gruntfile.js', 'assets/**/*.js']
          }

    });


    // Carregando os plugins
    // ---------------------------------------
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Registrando a tarefa customizada
    // ---------------------------------------
    grunt.registerTask( "default", [ "connect", "watch",  "jshint"]);

};