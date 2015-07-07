# Project dot files

### Editor config
Configured to provide the following:
*   spaces for indentation
*   indentation of 4 spaces
*   linux style newlines and file endings

This will be detected by most editors and the changes will be enforced for the project containing this file.

### [JSCS](http://jscs.info/)
Code linter for pragmatically enforcing style guides. For the example I am pulling in the [airbnb](https://github.com/airbnb/javascript) preset as this gives a
clean and standardised style. There are also plugins for [Grunt](https://github.com/jscs-dev/grunt-jscs/) and
[Gulp](https://github.com/jscs-dev/gulp-jscs/).

### [JS Hint](http://jshint.com/)
One of the most standard and well known linters, it will handle a lot of conventions in the code. The list of config
options can be seen [here](http://jshint.com/docs/options/). [Grunt](https://github.com/gruntjs/grunt-contrib-jshint)
and [Gulp](https://github.com/spalger/gulp-jshint) tasks are available.


### Release process
Grunt can be used to release the project, the `grunt release` task can be used to bump the verion number add a version 
banner to the dot files and push the changes to git. 