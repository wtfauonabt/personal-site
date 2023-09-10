declare const _default: {
    displayName: string;
    preset: string;
    setupFilesAfterEnv: string[];
    coverageDirectory: string;
    transform: {
        '^.+\\.(ts|mjs|js|html)$': (string | {
            tsconfig: string;
            stringifyContentPathRegex: string;
        })[];
    };
    transformIgnorePatterns: string[];
    snapshotSerializers: string[];
};
export default _default;
