module.exports = function(grunt) {

    ////////////////////////////////////////////////////////////////////
    /////////////////////////////// COMMANDS ///////////////////////////
    ////////////////////////////////////////////////////////////////////

    grunt.registerTask('default', 'Build assets for local', [
        'js',
        'minify'
    ]);

    grunt.registerTask('rebuild', 'Rebuild all assets from scratch', [
        'clean',
        'default',
    ]);

    grunt.registerTask('production', 'Build assets for production', [
        'concat',
        'minify'
    ]);

    // Flow
    ////////////////////////////////////////////////////////////////////

    grunt.registerTask('minify', 'Minify assets', [
        'uglify',
    ]);

    // By filetype
    ////////////////////////////////////////////////////////////////////

    grunt.registerTask('js', 'Build scripts', [
        'jshint',
        'concat:js',
    ]);
}
