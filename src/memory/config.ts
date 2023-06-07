/*
 * Config Manager
 *
 * The config contains various information about the bot account.
 * This global manager takes care of loading the config from memory and returning the values.
*/

import { readFileSync } from "node:fs";
import { join } from "node:path";

import { getCurrentDirectory } from "../helpers/getCurrentDirectory.js";

/**
 * The format of the config JSON file.
 * See an example in [accounts/ExampleUsername/config.json](../../accounts/ExampleUsername/config.json).
 */
export interface ConfigFile {
	token: string;
}

/**
 * The file path of the config memory file.
 */
let filePath = "";

/**
 * The local copy of the config.
 */
let config: ConfigFile;

/**
 * Sets the account name and loads the config from the memory file.
 *
 * Should be called before trying to access the config.
 *
 * @param account a valid account name
 * @throws if the account name is not valid, or if the memory file is improperly formatted
 */
export function loadFrom (account: string): void {
	filePath = join(getCurrentDirectory(import.meta.url), "..", "..", "accounts", account, "config.json");

	// Load the memory file
	const fileBuffer = readFileSync(filePath);
	const fileStr = fileBuffer.toString();
	const json: unknown = JSON.parse(fileStr);

	// Validate the file formatting
	if (isValidConfigFile(json)) {
		config = json;
	}
	else {
		throw new Error(`The config memory file at ${filePath} is not properly formatted.`);
	}
}

/**
 * @returns whether the given JSON has is a properly formatted config file
 */
function isValidConfigFile (json: unknown): json is ConfigFile {
	return json instanceof Object
		&& Object.prototype.hasOwnProperty.call(json, "token");
}

/**
 * @returns the full config
 */
export function getConfig (): ConfigFile {
	return config;
}

/**
 * WARNING: do not store or log your token in any publicly available place, or your bot will get hacked!
 *
 * @returns the discord token necessary to log-in the client
 */
export function getToken (): string {
	return config.token;
}
