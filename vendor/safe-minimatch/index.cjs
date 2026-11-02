/* eslint-disable @typescript-eslint/no-require-imports -- Legacy ESLint consumers require a callable CommonJS export. */
const implementation = require("minimatch-patched");

// Preserve the callable API and statically discoverable native ESM exports.
// All matching and preprocessing remains in the upstream patched package.
module.exports = implementation.minimatch;
module.exports.minimatch = implementation.minimatch;
module.exports.Minimatch = implementation.Minimatch;
module.exports.filter = implementation.filter;
module.exports.defaults = implementation.defaults;
module.exports.match = implementation.match;
module.exports.braceExpand = implementation.braceExpand;
module.exports.GLOBSTAR = implementation.GLOBSTAR;
module.exports.sep = implementation.sep;
module.exports.escape = implementation.escape;
module.exports.unescape = implementation.unescape;

// eslint-plugin-import uses only .test() on makeRe's return value.
// RegExp serialization and .exec are outside this private adapter's API.
module.exports.makeRe = function makeRe(pattern, options) {
  const matcher = new implementation.Minimatch(pattern, options);
  return { test: value => matcher.match(String(value)) };
};
