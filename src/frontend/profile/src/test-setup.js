"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
    testEnvironmentOptions: {
        errorOnUnknownElements: true,
        errorOnUnknownProperties: true,
    },
};
require("jest-preset-angular/setup-jest");
