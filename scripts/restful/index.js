// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world } from '@minecraft/server';
import { b64_to_utf8, utf8_to_b64 } from './encoding';
;
const overworld = world.getDimension('overworld');
export class RESTError extends Error {
}
;
;
globalThis.KEY = 'jayly-restful';
export class Table {
    /**
     * @internal
     */
    toRawtext() {
        const rawData = JSON.stringify({ route: this.route, data: this.data });
        return utf8_to_b64(rawData);
    }
    ;
    constructor(rawtext) {
        try {
            const { route, data } = JSON.parse(b64_to_utf8(rawtext));
            this.route = route;
            this.data = data;
        }
        catch (error) {
            const { route, data } = JSON.parse(rawtext);
            this.route = route;
            this.data = data;
        }
    }
    ;
}
;
export class Member {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
}
;
/**
 * Request methods available with Rest API
 */
export var RequestMethod;
(function (RequestMethod) {
    /**
     * POST requests are commonly used to create a new resource that is a
     * subordinate of the specified route.
     */
    RequestMethod["POST"] = "POST";
    /**
     * GET requests are commonly used to retrieve information about a resource
     * at the specified route.
     */
    RequestMethod["GET"] = "GET";
    /**
     * PUT requests are commonly used to update a single resource that already
     * exists in a resource collection.
     */
    RequestMethod["PUT"] = "PUT";
    /**
     * PATCH requests are commonly used to update partial of an already
     * existed resource collection.
     */
    RequestMethod["PATCH"] = "PATCH";
    /**
     * POST requests are commonly used to remove an existing resource that is a
     * subordinate of the specified route.
     */
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod || (RequestMethod = {}));
;
export class REST {
    constructor(id) {
        const regex = /^[a-z]+$/;
        if (!regex.test(id))
            throw new RESTError('Invalid id.');
        const objectiveId = id;
        this.scoreboardIdentity = world.scoreboard.getObjective(objectiveId) ?? world.scoreboard.addObjective(objectiveId, id);
    }
    ;
    request(route, options) {
        const participant = this.scoreboardIdentity.getParticipants().find((value) => new Table(value.displayName).route === route);
        // delete route
        if (options.method === RequestMethod.DELETE) {
            if (!participant)
                throw new RESTError('Route not found.');
            const parsedOption = options;
            if (typeof parsedOption.key !== 'string')
                this.scoreboardIdentity.removeParticipant(participant);
            else {
                const table = new Table(participant.displayName);
                const memberIndex = table.data.findIndex((value) => value.key === parsedOption.key);
                if (memberIndex === -1)
                    throw new RESTError('Member not found in route ' + route);
                // set value
                table.data.splice(memberIndex, 1);
                const encrypted = table.toRawtext();
                // version increment
                const version = participant.getScore(this.scoreboardIdentity);
                overworld.runCommand(`scoreboard players set ${JSON.stringify(encrypted)} ${JSON.stringify(this.scoreboardIdentity.id)} ${version + 1}`);
            }
            ;
        }
        // get member value from route
        else if (options.method === RequestMethod.GET) {
            const parsedOption = options;
            if (!participant)
                throw new RESTError('Route not found.');
            const { data: members } = new Table(participant.displayName);
            const data = members.find((v) => v.key === parsedOption.key);
            if (!data)
                throw new RESTError('Member not found in route ' + route);
            return data.value;
        }
        // modify member value from route
        else if (options.method === RequestMethod.PATCH) {
            const parsedOption = options;
            if (!participant)
                throw new RESTError('Route not found.');
            const table = new Table(participant.displayName);
            const member = table.data.find((value) => value.key === parsedOption.key);
            if (!member)
                throw new RESTError('Member not found in route ' + route);
            // set value
            member.value = parsedOption.value;
            const encrypted = table.toRawtext();
            // version increment
            const version = participant.getScore(this.scoreboardIdentity);
            overworld.runCommand(`scoreboard players set ${JSON.stringify(encrypted)} ${JSON.stringify(this.scoreboardIdentity.id)} ${version + 1}`);
            return version + 1;
        }
        // create a new route
        else if (options.method === RequestMethod.POST) {
            if (!!participant)
                throw new RESTError('Cannot create new route. Route ' + JSON.stringify(route) + ' already exists.');
            const rawtext = JSON.stringify({ route, data: [] });
            const table = new Table(rawtext.toString());
            overworld.runCommand(`scoreboard players set ${JSON.stringify(table.toRawtext())} ${JSON.stringify(this.scoreboardIdentity.id)} 1`);
        }
        // create a new member from route
        else if (options.method === RequestMethod.PUT) {
            const parsedOption = options;
            if (!participant)
                throw new RESTError('Route not found.');
            const table = new Table(participant.displayName);
            if (table.data.findIndex((value) => value.key === parsedOption.key) > -1)
                throw new RESTError('Member exist in route ' + route);
            // set value
            const member = new Member(parsedOption.key, parsedOption.value);
            table.data.push(member);
            const encrypted = table.toRawtext();
            // version increment
            overworld.runCommand(`scoreboard players set ${JSON.stringify(encrypted)} ${JSON.stringify(this.scoreboardIdentity.id)} 1`);
        }
        else
            throw new RESTError('Request method ' + options.method + ' not acceptable.');
    }
    ;
}
;
