# gh-description [![Build Status](https://travis-ci.org/RichardLitt/gh-description.svg?branch=master)](https://travis-ci.org/RichardLitt/gh-description)

> Set and get a GitHub repository description


## Install

```
$ npm install --save gh-description
```


## Usage

```js
const ghDescription = require('gh-description');

ghDescription('unicorns');
//=> 'unicorns & rainbows'
```


## API

### ghDescription(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global gh-description
```

```
$ gh-description --help

  Usage
    gh-description [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ gh-description
    unicorns & rainbows
    $ gh-description ponies
    ponies & rainbows
```


## License

MIT © [Richard Littauer](http://burntfen.com)
