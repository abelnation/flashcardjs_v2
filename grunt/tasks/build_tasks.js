module.exports = function(grunt) {

    grunt.registerTask('lint', [
        'devUpdate',
        'jshint',
        'jscs',
        'todos',
    ]);

    grunt.registerTask('build', [
        'clean',
        'lint',

        'sass',

        'lineremover',

        // FILL ME IN
    ]);

};
