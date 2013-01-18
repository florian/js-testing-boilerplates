# JavaScript testing boilerplate

JavaScript testing frameworks require a lot of boilerplate. I grew tired of of having to set up all the files for every project, thus I decided to maintain this repo to quickly `cp` them into my project.

The different testing frameworks need different files, so I made a folder for each combination I used so far.

## Submodules / NPM

All vendor files are added with git submodules or NPM, so you can easily update them.

## Makefile

Each boilerplate folder contains a Makefile with these tasks:

- `make init-testing`: Initialise the git submodules. Run this after `cp`ing the boilerplate.
- `make update-testing`: Updates the node packages and / or the git submodules.
- `make test`: Run the test suite, with the framework's command line tool or grunt + PhantomJS.

The folders also contain [grunt](https://github.com/gruntjs/grunt) files, so you can easily re-run the tests when files change.

```sh
$ grunt watch
```

## Usage

```sh
$ git clone https://github.com/js-coder/js-testing-boilerplates.git
$ cd yourProject # A git repo
$ cp -r ../js-testing-boilerplates/mocha-chai/* .
$ make init-testing
```

This will overwrite existing `Makefile`, `grunt.js`, `.gitmodules` files and the `spec` directory.
