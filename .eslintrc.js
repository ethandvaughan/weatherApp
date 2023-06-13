module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true
    },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community",
        "prettier"
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react",
        "react-native"
    ],
    rules: {
        // allow .js files to contain JSX, *you can also add typescript extensions too*
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

        //  to allow for usage of styles variable  before it was defined
        "no-use-before-define": ["error", { "variables": false }],

        // ignore errors for prop validation
        "react/prop-types": [0],

        // allow default imports. e.g. in index.js files.
        "no-restricted-exports": [0, { "restrictedNamedExports": ["default"] }],

        // ignore errors for import directives, *you can also add typescript extensions too*
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
          }
        ]
    }
};
