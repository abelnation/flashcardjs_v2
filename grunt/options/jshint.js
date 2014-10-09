module.exports = function(grunt) {
    return {
        gruntfile: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: 'Gruntfile.js'
        },
        grunttasks: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '<%= paths.grunt %>/**/*.js',
            ]
        },
        src: {
            options: {
                jshintrc: '<%= paths.src %>/.jshintrc'
            },
            src: [
                '<%= paths.src %>/*.js',
                '<%= paths.src %>/**/*.js',
                '!<%= paths.src %>/**/*libs/**/*.js',
                '!<%= paths.src %>/**/*libs/**/*.js',
                '!<%= paths.src %>/**/*libs/*.js',
                '!<%= paths.src %>/**/require.js',
            ]
        },
        tests: {
            options: {
                jshintrc: '<%= paths.tests %>/.jshintrc'
            },
            src: [
                '<%= paths.tests %>/**/*.js',
                '<%= paths.tests %>/**/libs/**',
            ]
        },
    };
};
