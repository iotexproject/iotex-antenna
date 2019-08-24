#!/usr/bin/env sh

# abort on errors
set -e

# build
NODE_ENV=development npm run build:docs

# navigate into the build output directory
cd docs

touch .nojekyll

# if you are deploying to a custom domain
#echo 'iotex-antenna-docs.iotex.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:iotexproject/iotex-antenna.git master:gh-pages

cd -
