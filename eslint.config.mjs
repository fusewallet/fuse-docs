import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
    ...tseslint.config({
        extends: [
            js.configs.recommended,
            // ...tseslint.configs.recommended,
            ...tseslint.configs.strict,
            ...tseslint.configs.stylistic,
        ],
        files: ['src/**/*.{ts,tsx}'],
        ignores: ['dist'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': 'off',
            'import/no-anonymous-default-export': 'off',
        },
    }),
    ...compat.config({
        extends: ['eslint:recommended', 'next'],
    }),
    {
        rules: {
            'import/no-anonymous-default-export': 'off',
        },
    },
];
export default eslintConfig;
