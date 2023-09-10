"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const preset_1 = require("@nx/playwright/preset");
const devkit_1 = require("@nx/devkit");
// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports.default = (0, test_1.defineConfig)({
    ...(0, preset_1.nxE2EPreset)(__filename, { testDir: './src' }),
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },
    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'yarn nx serve profile',
        url: 'http://localhost:4200',
        reuseExistingServer: !process.env.CI,
        cwd: devkit_1.workspaceRoot
    },
});
//# sourceMappingURL=playwright.config.js.map