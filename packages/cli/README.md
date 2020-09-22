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
$ npm install -g @gaming-tools/discord-bot-cli
$ discord-bot-cli COMMAND
running command...
$ discord-bot-cli (-v|--version|version)
@gaming-tools/discord-bot-cli/0.0.0 win32-x64 node-v14.8.0
$ discord-bot-cli --help [COMMAND]
USAGE
  $ discord-bot-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`discord-bot-cli hello [FILE]`](#discord-bot-cli-hello-file)
* [`discord-bot-cli help [COMMAND]`](#discord-bot-cli-help-command)
* [`discord-bot-cli roll [FILE]`](#discord-bot-cli-roll-file)

## `discord-bot-cli hello [FILE]`

describe the command here

```
USAGE
  $ discord-bot-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ discord-bot-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/weekywhawha/discord-bot-cli/blob/v0.0.0/src\commands\hello.ts)_

## `discord-bot-cli help [COMMAND]`

display help for discord-bot-cli

```
USAGE
  $ discord-bot-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_

## `discord-bot-cli roll [FILE]`

describe the command here

```
USAGE
  $ discord-bot-cli roll [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\roll.ts](https://github.com/weekywhawha/discord-bot-cli/blob/v0.0.0/src\commands\roll.ts)_
<!-- commandsstop -->
