"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => { return { statusCode: 200, body: JSON.stringify({ message: 'packages handler' }) }; };
exports.handler = handler;
