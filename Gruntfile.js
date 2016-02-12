module.exports = function(grunt) {

  // SASS settings
  var SASSconfigs = {
      "default": {
        "sassDir": "src/style",
        "cssDir": "dist/style",
        "imagesDir": "dist/images",
        "imagesPath": "src/images",
        "generatedImagesDir": "dist/images",
        "javascriptsDir": "src/js",
        "fontsDir": "dist/fonts",
        "httpImagesPath": "../images",
        "httpGeneratedImagesPath": "../images",
        "require": [
          "compass-normalize"
        ],
        "force": true,
        "noLineComments": true /** this option remove all those undesired lines that show the original SASS file that code black originally belonged to */
      }
    }

  // Grunt Init Settings
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Compass
    compass: {
      default: {
        options: SASSconfigs.default
      }
    },

    // Combine Media Queries
    /** This task combines matching Media Queries and solves the Media Queries mess that SASS creates when compiling files with Media Queries nested inside an element. */
    combine_mq: {
      new_filename: {
        src: 'dist/style/style.css',
        dest: 'dist/style/style.css'
      }
    },

    // Copy
    /** Create copies form the source durectory to the final directory */
    copy: {      
      libs: {
        files: [{expand: true, cwd: 'src/style', src: ['bootstrap.3.3.6.css'], dest: 'dist/style'}]
      },
      images: {
        files: [{expand: true, cwd: 'src/images', src: ['**'], dest: 'dist/images/'}]
      },
      fonts: {
        files: [{expand: true, cwd: 'src/fonts', src: ['**'], dest: 'dist/fonts'}]
      }
    }


  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-combine-mq');

  // Define tasks
  grunt.registerTask("beautify", ["copy", "compass", "combine_mq"]);
};
