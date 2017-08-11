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

##### enterprise

Type: `bool` or `string`

Specify a different endpoint for the GitHub URL. Useful for GitHub Enterprise.
Setting this flag as a boolean will automatically pull from the environmental variable `GITHUB_ENDPOINT`.

If using `enterprise`, the token must be explicitly set and cannot be passed through from the environment. This is to ensure that bad credentials from the public GitHub don't mess up the works.

Alias: `e`

#### token

Your GitHub access token, if not set as an env variable or supplied in the CLI.

## CLI

The `gh-description` command uses [ghauth](https://github.com/rvagg/ghauth) to generate and [locally store](https://github.com/LinusU/node-application-config#config-location) a GitHub API personal token.

You can skip this step by [manually generating a token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and setting it as an environment variable named `GH_DESCRIPTION_TOKEN`.

```
$ gh-description --help

  Usage
    $ gh-description [input]

  Options
    -e, --enterprise  Specify a different GitHub endpoint

  Examples
    $ gh-description
    Set and get a GitHub repository description
    $ gh-description RichardLitt/gh-description
    Set and get a GitHub repository description
    $ gh-description RichardLitt/gh-description 'ponies and unicorns'
    New description: ponies and unicorns
    $ gh-description RichardLitt/gh-description -e
    New enterprise description: Engage
    $ gh-description RichardLitt/gh-description -e https://scottymcscottface.co.uk
    New enterprise description: Beam Me Up
```

## Contribute

PRs and [issues](https://github.com/RichardLitt/gh-description/issues) gladly accepted!

## License

MIT © [Richard Littauer](http://burntfen.com)
