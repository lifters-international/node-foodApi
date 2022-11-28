"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApiKeyValid = void 0;
exports.isApiKeyValid = `
    query Query($apiKey: String!) {
        isFoodApiKeyValid(api_key: $apiKey)
    }
`;
