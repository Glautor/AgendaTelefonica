module.exports = function(grunt){

	// Configuration
	grunt.initConfig({
		// pass options to plugins, references to files etc
	    serve: {
	        options: {
	            port: 9000,
	            'index2': {
	            	outputUrl: 'index2Ctrl.js'
	            }
	        }
	    }
	});

	// Load olugins
	// grunt.loadNpmTasks('')

	// Registers taks
	grunt.registerTask('run', function(){
		console.log('I am running');
	});

	grunt.registerTask('sleep', function(){
		console.log('I am slepping');
	});

	grunt.registerTask('all', ['sleep', 'run']);

	grunt.loadNpmTasks('grunt-serve');

}