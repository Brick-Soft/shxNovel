/**
 * A data structure, designed to manage on-demand rendering.     \
 * At the beginning of each loop, all Actions are checked first. \
 * Maintain an internal data structure {@link actions}.
 *
 * [Note] each action will be checked, \
 * even if it has already been determined that rendering is required. \
 *
 * [E.g.]
 * ```js
 * // When your animation starts
 * const id = addAction(true); // or
 * const id = addAction(() => {
 *  // do something
 *  // ? change the uniforms passed to the shader
 * });
 *
 * // When your animation ends
 * rmvAction(id);
 * ```
 *
 * @module Actions
 */

/**
 * Used to indicate whether the `RenderLoop` needs to render.
 */
type Action = ActionCallback | Boolean;

/**
 * If it's impossible to determine in advance whether rendering is needed. \
 * Using {@link ActionCallback}.
 */
type ActionCallback = () => Boolean;

export const actions: Map<Number, Action> = new Map();
window.actions = actions;

/** internal couter */
let _actionsUUID = 0;

/**
 * @param {Action} [cb=true]
 * @returns {number} this action UUID
 */
export function addAction(cb: Action = true): number {
    _actionsUUID++;
    actions.set(_actionsUUID, cb);
    return _actionsUUID;
}

/**
 * Accept Any value, but only number UUID will be accepted.
 * @param {any | number} thisActionsUUID
 */
export function rmvAction(thisActionsUUID: any | number) {
    return actions.delete(thisActionsUUID);
}

export function callActions() {
    const result = [];
    actions.forEach((value, key) => {
        if (value instanceof Function) {
            result.push(value());
        } else {
            result.push(value);
        }
    });
    return result;
}
