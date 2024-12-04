import eslintGlobalConfig from "../../eslint.config.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
    ...eslintGlobalConfig,
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        ignores: ["**/node_modules/**", "**/dist/**"],
    },
];
