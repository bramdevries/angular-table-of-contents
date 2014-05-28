module.exports = {
	js: {
		files: {
			'<%= paths.compiled.js %>/<%= name %>.js': [
                '<%= paths.original.js %>/<%= name %>.js',
                '<%= paths.original.js %>/Directives/*.js'
			],
		},
	}
};
