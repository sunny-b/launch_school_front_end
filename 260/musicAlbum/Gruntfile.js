module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					"public/js/vendor/all.js": ["public/js/vendor/all.js"]
				}
			}
		},
		bower_concat: {
			all: {
				dest: "public/js/vendor/all.js",
				dependencies: {
					"underscore": "jquery",
					"backbone": "underscore"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-bower-concat");

	grunt.registerTask('default', ['bower_concat', 'uglify']);
};