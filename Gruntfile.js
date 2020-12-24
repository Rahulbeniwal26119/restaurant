'use strict';
const sass = require('node-sass');
module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    grunt.initConfig({
        sass : {
            options : {
                implementation : sass , 
                sourceMap : true
            },
            dist : {
                files : {
                    'css/style.css' : 'css/style.scss'
                }
            }
        }
    })
    grunt.registerTask('css' , ['sass']);
}