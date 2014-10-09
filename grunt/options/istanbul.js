module.exports = function(grunt) {

    var reportDir = '<%= paths.coverage %>/report/';

    return {
        // process each of these inner objects as separate tasks
        _multiconfig: true,

        instrument: {
            files: [
                './<%= pkg.name %>*.js',
                '<%= jshint.src.src %>',
            ],
            options: {
                // lazy: true,
                basePath: '<%= paths.coverage %>/src_inst/',
            }
        },

        storeCoverage: {
            options: {
                dir: reportDir,
            }
        },

        makeReport: {
            src: '<%= paths.coverage %>/reports/**/*.json',
            options: {
                type: ['lcov', 'html'],
                dir: reportDir,
                print: 'detail'
            }
        }
    };
};
