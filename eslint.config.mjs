import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default tseslint.config({
    extends: [
        js.configs.recommended,
        // ...tseslint.configs.recommended,
        ...tseslint.configs.strict,
        ...tseslint.configs.stylistic,
        ...compat.extends('next/core-web-vitals', 'next/typescript'),
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
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
});
