module.exports = {
    env: {
        jasmine: true,
        "angular/mocks": true,
        es6: true
    },
    plugins: ["jasmine", "angular"],
    globals: {
        // "false" indicates that we do not allow reassigning the global
        angular: false
    },
    extends: ["airbnb-base/legacy", "gametek/rules/base", "gametek/rules/es6"],
    rules: {
        // allow "useless" escape (we use it for escaping URLs)
        "no-useless-escape": 0,
        // allow underscore dangle (Kambi's global object)
        "no-underscore-dangle": 0,
        // migrate to forcing 1tbs. no error for now, but will be up ahead
        "brace-style": ["warn", "1tbs"],
        // if including this file toghether with node.js config we need to be specific about not prefering ES6 templating
        // otherwise that rule can trickle down (up?) from node.js rules
        "prefer-template": 0,
        // always set "var viewModel = this" in controllers
        "angular/controller-as-vm": [2, "viewModel"],
        // do not allow assigning to $scope, force using controllerAs
        "angular/controller-as": 2,
        // disallow unused DI parameters
        "angular/di-unused": 2,
        // disallow the use of $http success() and error()
        "angular/no-http-callback": 2,
        // force DI parameters to be sorted alphabetically, but don't sort by case, and do not strip away underscores (to be compatible with Sublime's sorting)
        "angular/di-order": [2, false, "case_insensitive"],
        // disallow focused tests (to be checked in)
        "jasmine/no-focused-tests": 2
    }
};
