module.exports = function(grunt) {

    // Grunt task for unit test
    grunt.registerTask('test-unit', [
        
        'connect:jasmine',
        'jasmine',
        
        
    ]);

    grunt.registerTask('test-functional', [
        
        'connect:casperjs',
        'casperjs:functional',
        
    ]);
    grunt.registerTask('test-integration', [
        
        'connect:casperjs',
        'casperjs:integration',
        
    ]);

    grunt.registerTask('test', [
        'test-unit',
        'test-functional',
        'test-integration',
    ]);
};
