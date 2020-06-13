/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return /^[a-zA-Z0-9]{6,20}$/.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validPassword(str) {
  return /^[a-zA-Z0-9]{6,20}$/.test(str);
}
