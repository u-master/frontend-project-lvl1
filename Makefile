install:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

relink:
	npm unlink --force
	npm link

lint:
	npx eslint .