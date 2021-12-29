# Pokerus

pokedex app

## Development

env setup: https://reactnative.dev/docs/environment-setup

```sh
# setup dev env
cp .env.example .env
# adjust values in .env as needed

# NOTE must reset yarn cache for env changes to take effect (ie: yarn start --reset-cache)

# use node version
nvm use

# install
yarn install

# install pods
cd ios
pod install

# start metro
yarn start

# start ios simulator
yarn ios
```

## branch stategy

```sh
# get latest from main

git checkout main
git fetch
git pull

# create new local branch
git checkout -b <feature-branch>

# make code changes
# use git add <files> and git commit as you go

# (if needed) get latest from main
git checkout main
git fetch
git pull
git checkout <feature-branch>
git merge main
# resolve conflicts

# add changes and push up branch
git add <files> # can use git add . to add all
git commit -m "commit message"
git push -u origin <branch>

# create a pull-request
# can use gh cli or just in github ui
```

## Notes

- api: https://pokeapi.co/
- Typescript api wrapper: https://github.com/Gabb-c/pokenode-ts

## Contributors

- @rdmulford
- @mulfordkl