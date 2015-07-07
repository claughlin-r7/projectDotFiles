(function () {
    module.exports = function (grunt) {
        var pkgjson = require('./package.json');
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            banner: '/*! <%= pkg.name %> - version - <%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            usebanner: {
                dist: {
                    options: {
                        position: 'top',
                        banner: '<%= banner %>'
                    },
                    files: {
                        src: ['.*']
                    }
                }
            },
            bump: {
                options: {
                    files: ['./package.json'],
                    updateConfigs: [],
                    commit: true,
                    commitMessage: 'Release v%VERSION%',
                    commitFiles: ['package.json'],
                    createTag: true,
                    tagName: 'v%VERSION%',
                    tagMessage: 'Version %VERSION%',
                    push: true,
                    pushTo: 'origin',
                    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                    globalReplace: false,
                    prereleaseName: false,
                    regExp: false
                }
            }
        });

        grunt.loadNpmTasks('grunt-banner');
        grunt.loadNpmTasks('grunt-bump');
    };
})();
