# discord-cleverbot

## cleverbot-free
[![API Status](https://github.com/IntriguingTiles/cleverbot-free/workflows/API%20Status/badge.svg)](https://github.com/IntriguingTiles/cleverbot-free/actions/workflows/api.yml)

## About

discord-cleverbot is a [Discord](https://discord.com/) bot that allows users to interact with the [Cleverbot chat bot](https://www.cleverbot.com/) on Discord. It is developed in [TypeScript](https://www.typescriptlang.org/) and relies on the [node.js](https://nodejs.org/) module of [cleverbot-free](https://www.npmjs.com/package/cleverbot-free).

It was originally started in December 2017 and has undergone several ground-up rewrites to improve functionality, efficiency, modernity, and simplicity.

## Licensing

Without a specific license, this code is the direct intellectual property of the original developer. It may not be used, modified, or shared without explicit permission.
Please see [GitHub's guide on licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

## Getting started

### Creating a bot

- Create a new bot account in the [Discord Developer Portal](https://discord.com/developers/applications/).
- Copy the access token of your bot for later.

### Setting up the code

- You will need an environment with [node.js v18](https://nodejs.org/en/download) installed (or use the Dev Container - see the [Development](#development) section below).
- Run `git pull https://github.com/JstnMcBrd/discord-cleverbot.git` to clone the repo.
- Create a new file called `.env` and add your access token, using [`.env.example`](./.env.example) as an example.

### Running the code

- In the top directory, run `npm install` to download all necessary packages.
- Run `npm run build` to build the project.
- Run `npm run commands` to register slash commands with Discord.
- Run `npm start` to start the bot.

### Interacting with the bot

- In the **OAuth2**>**URL Generator** tab in the Discord Developer Portal, generate an invite URL with the `applications.commands` scope.
- Use the invite URL to add the bot to a server.
- Use the `/whitelist` command in a channel to allow the bot to speak there.
- Send messages in the whitelisted channel and watch the bot respond!

## Development

- [Visual Studio Code](https://code.visualstudio.com/) is the recommended IDE for development.
- All settings are included as artifacts in the [`.vscode`](./.vscode) folder and will automatically apply.
- You can use the built-in debugger and set breakpoints to troubleshoot the code.

> If you want a standardized development environment, you can use the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) with the given [`devcontainer.json`](./.devcontainer/devcontainer.json) config to develop inside a [Docker](https://www.docker.com/) container with all dependencies and recommended extensions pre-installed.
>
> Simply install the extension and use the **Dev Containers: Open Folder in Container** command.
