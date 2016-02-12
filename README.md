# grunt-clean-sass-files-generator
This is a simple Grunt boilerplate to generate cleaner SASS compiled files. So far, this boilerplate shows two "hat-tricks":

## Removing Line Number Comments
If you use the default settings of SASS, you may have found these very unpleasant comments in your final CSS files:
```js
/* line 292, ../src/sass/components/header.scss */
```

In order to remove these comments, you need to set "noLineComments": true in your SASS settings in Gruntfile.js and voilà, no undesired automatic comments

## Combine Media Queries
For those who work with SASS and prefer nesting Media Queries inside an element, the output can be a real mess. This boilerplate installs a Grunt plugin called 'Combine Media Queries' that searchs for matching Media Queries in a CSS file, combines them and puts them at the end of the file. Nice, huh? These are the basic settings for this plugin:
```js
 combine_mq: {
      new_filename: {
        src: 'src/style/style.css',
        dest: 'dist/style/style.css'
      }
    }
```

For more information, see: https://github.com/frontendfriends/grunt-combine-mq

## Kittens
Why not some? :D

I hope you enjoy this project.
