module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true, // does this work?
        },
    },
    plugins: [ 'react' ],
    env: {
        browser: true,
        node: true,
    },
    extends: 'eslint:recommended',
    rules: {
        'array-bracket-spacing': [ 'warn', 'always' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'default-case': 'warn',
        'eqeqeq': [ 'error', 'smart' ],
        'indent': [ 'error', 2 ],
        'jsx-quotes': [ 'error', 'prefer-double' ],
        'no-console': [ 'warn', { allow: [ 'error', 'warn' ] } ],
        'no-else-return': 'error',
        'no-param-reassign': 'error',
        'no-use-before-define': [ 'error', 'nofunc' ],
        'no-var': 'error',
        'object-curly-spacing': [ 'warn', 'always' ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'quotes': [ 'error', 'single' ],
        'react/jsx-closing-bracket-location': [ 'warn', 'line-aligned' ],
        'react/jsx-indent-props': [ 'error', 2 ],
        'react/jsx-key': 'error',
        'react/jsx-no-undef': 'error', // make sure undefined properties scream
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'error',
        'react/sort-comp': 'warn',
        'semi': [ 'error', 'always' ],
    },
};