module.exports = function(grunt) {
    return {
        gruntfile: {
            files: './Gruntfile.js',
            tasks: [
                'jshint:gruntfile'
            ]
        },
        grunttasks: {
            files: [
                'grunt/**/*',
                '.jshintrc',
                '.jscs.jquery.json'
            ],
            options: {
                reload: true
            },
            tasks: [
                'jshint:grunttasks'
            ]
        },
        src: {
            files: [
                '<%= paths.src %>/**/*.js',
            ],
            tasks: [
                'build',
                'test',
            ]
        },
        tests: {
            files: [
                '<%= paths.tests %>/**/*.js',
            ],
            tasks: [
                'test',
            ]
        }
    };
};
