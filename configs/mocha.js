module.exports = {
    extends: ["plugin:mocha/recommended"],
    plugins: ["mocha"],
    env: {
        mocha: true
    },
    globals: {},
    rules: {
        "mocha/no-mocha-arrows": "off",
        "global-require": "off",
        "no-unused-expressions": "off"
    }
};
