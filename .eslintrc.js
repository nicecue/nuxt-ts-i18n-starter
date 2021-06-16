module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: ['prettier'],
    ignorePatterns: ['node_modules/', '.nuxt/', 'dist/', 'markup/', 'assets/'],
    rules: {
        // indent: ['error', 4, {SwitchCase: 1, ignoreComments: true}],
        'arrow-parens': ['error', 'as-needed'],
        'space-before-function-paren': [
            'error',
            {
                named: 'never'
            }
        ],
        'handle-callback-err': 'off',
        semi: ['error', 'always'],
        // 'object-curly-spacing': ['error', 'never'],
        'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
        'no-useless-constructor': 'off',
        camelcase: 'off',
        // 'vue/html-indent': ['warn', 4],
        // 'vue/html-self-closing': [
        //     'warn',
        //     {
        //         html: {
        //             normal: 'never',
        //         },
        //     },
        // ],
        'vue/no-v-html': 'off',
        'vue/attribute-hyphenation': [
            'warn',
            'always',
            {
                ignore: ['toolbarButtons', 'fontSize']
            }
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    // Index signature
                    'signature',

                    // Fields
                    'public-field', // = ['public-static-field', 'public-instance-field'])
                    'protected-field', // = ['protected-static-field', 'protected-instance-field'])
                    'private-field', // = ['private-static-field', 'private-instance-field'])

                    // Constructors
                    'constructor',

                    // Methods
                    'public-method', // = ['public-static-method', 'public-instance-method'])
                    'protected-method', // = ['protected-static-method', 'protected-instance-method'])
                    'private-method' // = ['private-static-method', 'private-instance-method'])
                ]
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'none'
            }
        ]
    }
};
