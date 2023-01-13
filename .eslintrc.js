module.exports = {
    extends: [
        '@scandipwa',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
    },
    rules: {
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/ban-types': 'off',
        // TODO: disable or enable rules here
    },
};
