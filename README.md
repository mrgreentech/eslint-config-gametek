Sharable eslint packages for the Gametek client platform. Theres is support for both legacy platform `GFP` and new linting conventions. This means that there are linting support for browser, node and test environments and also specialized packages like react, prettier etc...

# How to use

1. Install package:

    ```
    npm install -D eslint eslint-config-gametek
    ```

2. Add lint script in package.json
    ```
    "scripts": {
      "lint": "eslint *.js"
    },
    ```
3. Create `.eslintrc` in the root of the project.

4. Choose package to use

## General linting rules

Common rules extends "airbnb-base/legacy" and sets environment `es6` to true.

To use **common rules**:

    ```
    {
        "extends": "gametek"
    }
    ```

Or

    ```
    {
        "extends": "gametek/configs/common"
    }
    ```

To use **browser rules**:

    ```
    {
        "extends": "gametek/configs/browser"
    }
    ```

To use **node JS rules**:

    ```
    {
        "extends": "gametek/configs/node"
    }
    ```

## GFP rules (moved to /gametek/gfp/\*)

To use **browser rules** (comes with angular environment, made for ES5):

    ```
    {
        "extends": "gametek/gfp/browser"
    }
    ```

To use **node JS rules** (made for ES6 progressively), use:

    ```
    {
        "extends": "gametek/gfp/node"
    }
    ```

To use **React JS rules** (including JSX support), use:

    ```
    {
        "extends": "gametek/gfp/react"
    }
    ```

To use **Jest JS rules**, use:

    ```
    {
        "extends": "gametek/gfp/jest"
    }
    ```

If you are using **Prettier** with any of our eslint configurations, add:

    ```
    {
        "extends": "gametek/gfp/prettier"
    }
    ```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the eslint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.
