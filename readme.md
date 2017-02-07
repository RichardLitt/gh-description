# gh-description

[![Build Status](https://travis-ci.org/RichardLitt/gh-description.svg?branch=master)](https://travis-ci.org/RichardLitt/gh-description)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Set and get a GitHub repository description

## Install

```
npm install --save gh-description
```

or

```
npm install --global gh-description
```

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

The `gh-description` command uses [ghauth](https://github.com/rvagg/ghauth) to generate and [locally store](https://github.com/LinusU/node-application-config#config-location) a GitHub API personal token.

You can skip this step by [manually generating a token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and setting it as an environment variabled named `GH_DESCRIPTION_TOKEN`.

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
