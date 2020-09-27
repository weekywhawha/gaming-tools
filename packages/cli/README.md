discord-bot-cli
===============

A CLI for discord-bot

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/discord-bot-cli.svg)](https://npmjs.org/package/discord-bot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/discord-bot-cli.svg)](https://npmjs.org/package/discord-bot-cli)
[![License](https://img.shields.io/npm/l/discord-bot-cli.svg)](https://github.com/weekywhawha/discord-bot-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gaming-tools/cli
$ cli COMMAND
running command...
$ cli (-v|--version|version)
@gaming-tools/cli/0.0.0 win32-x64 node-v14.8.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli dual COMMAND`](#cli-dual-command)
* [`cli hello [FILE]`](#cli-hello-file)
* [`cli help [COMMAND]`](#cli-help-command)
* [`cli roll COMMAND [COMMENT]`](#cli-roll-command-comment)
* [`cli twitch COMMAND`](#cli-twitch-command)
* [`cli weather [FILE]`](#cli-weather-file)

## `cli dual COMMAND`

describe the command here

```
USAGE
  $ cli dual COMMAND

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\dual.ts](https://github.com/weekywhawha/gaming-tools/blob/v0.0.0/src\commands\dual.ts)_

## `cli hello [FILE]`

describe the command here

```
USAGE
  $ cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ discord-bot-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/weekywhawha/gaming-tools/blob/v0.0.0/src\commands\hello.ts)_

## `cli help [COMMAND]`

display help for cli

```
USAGE
  $ cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_

## `cli roll COMMAND [COMMENT]`

describe the command here

```
USAGE
  $ cli roll COMMAND [COMMENT]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\roll.ts](https://github.com/weekywhawha/gaming-tools/blob/v0.0.0/src\commands\roll.ts)_

## `cli twitch COMMAND`

describe the command here

```
USAGE
  $ cli twitch COMMAND

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\twitch.ts](https://github.com/weekywhawha/gaming-tools/blob/v0.0.0/src\commands\twitch.ts)_

## `cli weather [FILE]`

describe the command here

```
USAGE
  $ cli weather [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\weather.ts](https://github.com/weekywhawha/gaming-tools/blob/v0.0.0/src\commands\weather.ts)_
<!-- commandsstop -->
