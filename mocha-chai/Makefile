test:
	grunt test

init-testing:
	git submodule add https://github.com/visionmedia/mocha.git spec/vendor/mocha
	git submodule add https://github.com/chaijs/chai.git spec/vendor/chai
	git submodule init
	npm install

update-testing:
	git submodule update
	npm install

.PHONY: test init-testing update-testing