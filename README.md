[![npm @latest](https://img.shields.io/npm/v/@frenchex/config-cli)](https://www.npmjs.com/package/@frenchex/config-cli)
[![npm downloads](https://img.shields.io/npm/dt/@frenchex/config-cli)](https://www.npmjs.com/package/@frenchex/config-cli)
[![dependencies Status](https://david-dm.org/french-exception/node-config-cli/status.svg)](https://david-dm.org/french-exception/node-config-cli)
[![devDependencies Status](https://david-dm.org/french-exception/node-config-cli/dev-status.svg)](https://david-dm.org/french-exception/node-config-cli?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/jdalrymple/node-gitlab.svg)](https://greenkeeper.io/)
[![Code Climate](https://codeclimate.com/github/french-exception/node-config-cli/badges/gpa.svg)](https://codeclimate.com/github/jdalrymple/node-gitlab)
[![Build Status](https://img.shields.io/travis/jdalrymple/node-gitlab/master.svg)](https://travis-ci.org/jdalrymple/node-gitlab)
[![Coverage](https://img.shields.io/codecov/c/github/jdalrymple/node-gitlab/master.svg)](https://codecov.io/gh/jdalrymple/node-gitlab)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)
[![Install Size](https://packagephobia.now.sh/badge?p=gitlab)](https://packagephobia.now.sh/result?p=gitlab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/jdalrymple/node-gitlab/blob/master/LICENSE.md)

# About

Configuration CLI gives you command line interface over Configuration files

# TL;DR
## Install
Install as global package or as dependency
```typescript
// as global
npm install -g @frenchex/config-cli 
// as npm dependency
npm install --save @frenchex/config-cli 
```

## Initialization
Go to your home directory, it will create a ```~/config/config.json``` which will hold your user configuration
```typescript
cd ~
frenchex-config.ts init
```

## Usage
Now that you have initialized a configuration, you can use it
```typescript
frenchex-config.ts set "foo.bar" "%version%-%env%"
frenchex-config.ts set "baz" "%foo.bar%"
```

Gives:

```bash
$ frenchex-config.ts dump --raw
{
  "version": "1.0",
  "foo": {
    "bar": "%version%-%env%"
  },
  "baz": "%foo.bar%"
}

```

```bash
$ env=dev frenchex-config.ts dump --env env
{
  "env": "dev",
  "version": "1.0",
  "foo": {
    "bar": "1.0-dev"
  },
  "baz": "1.0-dev"
}

```

# Commands
```bash
$ frenchex-config.ts
frenchex-config.ts <command>

Commands:
  frenchex-config.ts dump               dump configuration as json
  frenchex-config.ts get <key>          get key
  frenchex-config.ts imports            manage imports
  frenchex-config.ts init               init Configuration
  frenchex-config.ts set <key> <value>  set key

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Not enough non-option arguments: got 0, need at least 1
```
# Installation

## As a global package
```typescript
npm install -g @frenchex/config-cli
cd ~
frenchex-config.ts init
```

## As a dependency

You better use the ```api``` version of this software : @frenchex/config-api

https://github.com/french-exception/node-config-api

https://www.npmjs.com/package/@frenchex/config-api

```typescript
npm install --save @frenchex/config-api
```


# Example

```bash
env=dev frenchex-config get "foo.bar" --config ./test-res/js.js --env env
env=dev frenchex-config set "foo.bar" "my_value_%env%" --config ./test-res/js.js --env env
```
