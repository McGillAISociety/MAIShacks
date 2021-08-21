#!/bin/bash
yarn run build
yarn run export
touch out/.nojekyll
echo 'maishacks.com' >out/CNAME
gh-pages -d out -t true
