# gh-description

[![Build Status](https://travis-ci.org/RichardLitt/gh-description.svg?branch=master)](https://travis-ci.org/RichardLitt/gh-description)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Set and get a GitHub repository description

## Install

```
npm install --save gh-description
```

Note: You will need to set credentials using [ghauth](https://github.com/rvagg/ghauth) if you plan on setting data. This will be used for the CLI tool, and the token will be stored in your `~Library`. To edit this file later, see [this module](https://github.com/LinusU/node-application-config). Your token will need to have access to `repo` credentials. You can manually manage these [here](https://github.com/settings/tokens).

If you are importing this package and using the index.js file, or running the tests, you will need to set the token as an environmental variable. Set it to: `GH_DESCRIPTION_TOKEN`.

## Usage

```js
const ghDescription = require('gh-description');

ghDescription('RichardLitt/gh-description');
//=> 'Set and get a GitHub repository description'
ghDescription('RichardLitt/gh-description', 'unicorns & rainbows');
//=> 'unicorns & rainbows'
```

## API

### ghDescription(repoName, description, [options], token)

#### repoName

Type: `string`

The name for the repository to test.

#### description

Type: `string`

The new description to set. To set, you must also supply the repoName first.

#### options

None.

#### token

Your GitHub access token, if not set as an env variable or supplied in the CLI.

## CLI

```
npm install --global gh-description
```

```
$ gh-description --help

  Usage
    $ gh-description

  Examples
    $ gh-description
    Current description: Set and get a GitHub repository description
    $ gh-description RichardLitt/gh-description 'ponies and unicorns'
    New description: ponies and unicorns
```

## Contribute

PRs and [issues](https://github.com/RichardLitt/gh-description/issues) gladly accepted!

## License

MIT © [Richard Littauer](http://burntfen.com)
