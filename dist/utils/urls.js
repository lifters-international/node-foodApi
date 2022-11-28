"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiUrl = exports.getServerUrl = void 0;
const getServerUrl = () => {
    return "https://server.lifters.app";
};
exports.getServerUrl = getServerUrl;
const getApiUrl = () => {
    return `${(0, exports.getServerUrl)()}graphql`;
};
exports.getApiUrl = getApiUrl;
