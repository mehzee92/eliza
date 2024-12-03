import eslintGlobalConfig from "../../eslint.config.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
    {
        ignores: [
            "**/node_modules/*",
            "**/coverage/*",
            "**/dist/*",
            "**/types/*",
            "**/scripts/concatenated-output.ts",
            "rollup.config.js",
            "jest.config.js",
            "docs/",
        ],
    },
    ...eslintGlobalConfig,
];
