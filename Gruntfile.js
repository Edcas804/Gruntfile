module.exports = function (grunt){
    
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
		    expand: true,
		    cwd: 'public/styles',
		    src: ['*.scss'],
		    dest: 'public/styles',
		    ext: '.css'
		}]
	    }
	},
	
	watch: {
	    files: ['public/styles/*.scss', 'public/styles/src/*.scss'],
	    tasks: ['css'],
	},

	browserSync: {
            dev: {
                bsFiles: {
	           src: [
		       'public/styles/*.css',
		       'public/*.html',
		       'public/scripts/*.js'
		   ] 
		},
		options: {
	            watchTask: true,
		    server:{
			baseDir: 'public/',
		    }
		}
	    }
	    
	},
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch'])
};
