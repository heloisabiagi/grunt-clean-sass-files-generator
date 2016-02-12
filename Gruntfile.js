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
    /** This task combines equal Media Queries and solves the Media Queries mess that SASS creates when compiling files where those media queries were declared inside an element declaration. */
    cmq: {
      your_target: {
        files: {
          'dist/style': ["dist/style/*.css", "!dist/style/bootstrap.3.3.6.css"]
        }
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
  grunt.loadNpmTasks('grunt-combine-media-queries');

  // Define tasks
  grunt.registerTask("beautify", ["copy", "compass", "cmq"]);
};
