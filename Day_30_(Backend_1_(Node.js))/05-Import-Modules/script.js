// Importing specific named exports (sum and PI) from math.js using ES6 module syntax
// 'import' is used in ES modules instead of 'require' which is used in CommonJS.
import { sum, PI } from "./math.js";

// Calling the sum function and logging the result
console.log(sum(4, 6));

// Difference Between require() and import:
//
// 1️ 'require()' is used in CommonJS modules, whereas 'import' is used in ES6 modules.
// 2️ 'require()' loads modules synchronously, while 'import' is asynchronous and can be optimized for performance.
// 3️ 'require()' works natively in Node.js, whereas 'import' requires the "type": "module" setting in package.json or .mjs file extension.
// 4️ 'require()' allows dynamic loading (can be used inside functions), but 'import' must be at the top of the file.
// 5️ 'import' supports tree shaking (removing unused code during bundling), but 'require()' does not.
// 6️ 'require()' uses 'module.exports' and 'import' uses 'export' to expose functionalities.
