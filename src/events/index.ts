/**
 * Loads all the event handlers and gives them to the Client.
 *
 * Also contains other useful helper methods.
 */

import type { Client } from "discord.js";

import { error } from "./error.js";
import type { EventHandler } from "./EventHandler.js";
import { interactionCreate } from "./interactionCreate.js";
import { messageCreate } from "./messageCreate.js";
import { ready } from "./ready.js";

/** The list of all event handlers. */
const events = new Map<string, EventHandler>;

addEventHandler(error as EventHandler);
addEventHandler(interactionCreate as EventHandler);
addEventHandler(messageCreate as EventHandler);
addEventHandler(ready as EventHandler);

/**
 * Add the given event handler to the list of event handlers.
 *
 * @param event The event to add to the list
 * @throws If there is already a handler for the same event in the list
 */
function addEventHandler (event: EventHandler): void {
	const name = event.name;

	if (events.has(name)) {
		throw new TypeError(`Failed to add event handler '${name}' because an event with that name already exists.`);
	}
	events.set(name, event);
}

/**
 * @returns A read-only list of the event handlers
 */
export function getEventHandlers (): ReadonlyMap<string, EventHandler> {
	return events;
}

/**
 * Registers all the event handlers with the client.
 *
 * @param client The client to register with
 */
export function registerEventHandlers (client: Client): void {
	getEventHandlers().forEach(event => {
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		}
		else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	});
}
