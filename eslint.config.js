const react = require('eslint-plugin-react');
const js = require('@eslint/js');
const tsEslint = require('@typescript-eslint/parser');
const globals = require('globals');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
    {
        files: ['src/**/*.{ts,tsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            parser: tsEslint,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-console': ['warn', { allow: ['warn'] }],
            'no-plusplus': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
            'react/prop-types': 'off',
            '@typescript-eslint/type-annotation-spacing': [
                'error',
                { before: true, after: true },
            ],
        },
    },
    {
        files: ['vite.config.ts'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    {
        files: ['src/**/*.test.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            'import/no-extraneous-dependencies': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    eslintPluginPrettierRecommended,
];
