import Settings from "./Settings";

const registers = [];

/**
 * Adds a trigger with its associated dependency to the list of registered triggers.
 * Credit to: https://www.chattriggers.com/modules/v/BloomCore for idea

 * @param {Object} trigger - The trigger to be added.
 * @param {Function} dependency - The function representing the dependency of the trigger.
 * */
export function registerWhen(trigger, callback){
    trigger.unregister();
    registers.push({
        trigger: trigger,
        callback: callback,
        active: false,
    });
}