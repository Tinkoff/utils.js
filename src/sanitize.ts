import curryN from './function/curryN';

const map = {
    em: /<em>|<\/em>/g
};

/**
 * Removes `tag` entries from string
 *
 * @param {String} tag one of ['em']
 * @param {String} str
 * @return {String} sanitized string
 *
 * @example
 *      sanitize('em', '<em>abc</em>') // 'abc'
 *
 */
export default curryN(2, (tag, str = '') => str.replace(map[tag], ''));
