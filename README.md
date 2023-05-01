# Base Serverless Framework Template

## What's included
* Folder structure used consistently across our projects.
* `eslint` and `prettier` configured to play nicely together with standard set of rules for static code analysis.
* `husky` pre-commit hook that runs npm `validate` script to ensure overall health of project.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/acolpitts-intercap/sls-base
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!
