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
                    updateConfigs: ['pkg'],
                    commit: false,
                    commitMessage: 'Release v%VERSION%',
                    commitFiles: ['*.*'],
                    createTag: false,
                    tagName: 'v%VERSION%',
                    tagMessage: 'Version %VERSION%',
                    push: true,
                    pushTo: 'origin',
                    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                    globalReplace: false,
                    prereleaseName: false,
                    regExp: false
                }
            },
            gitadd: {
                task: {
                    options: {
                        force: true
                    },
                    files: {
                        src: ['package.json', '.editorconfig', '.gitignore', '.jscsrc', '.jshintrc']
                    }
                }
            },
            gitcommit: {
                task: {
                    options: {
                        message: 'Release v<%= pkg.version %>',
                        noVerify: true,
                        noStatus: false
                    },
                    files: {
                        src: ['package.json', '.editorconfig', '.gitignore', '.jscsrc', '.jshintrc']
                    }
                }
            },
            gitpush: {
                task: {
                    options: {
                        remote: 'origin'
                    }
                }
            }
        });
        grunt.loadNpmTasks('grunt-banner');
        grunt.loadNpmTasks('grunt-bump');
        grunt.loadNpmTasks('grunt-git');

        grunt.registerTask("release", ["bump", "gitadd", 'gitcommit', 'gitpush']);
    };
})();
