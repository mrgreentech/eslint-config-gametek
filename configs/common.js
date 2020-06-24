module.exports = {
    extends: ["airbnb-base"],
    env: {
        es6: true
    },
    rules: {
        "no-use-before-define": ["error", { functions: false }],
        // allow unused variables only when arguments to a function
        "no-unused-vars": ["error", { args: "none" }]
    }
};
