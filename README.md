# eslint-config-gametek

![Code scanning - action](https://github.com/mrgreentech/eslint-config-gametek/workflows/Code%20scanning%20-%20action/badge.svg)

Sharable eslint packages and plugins for the Gametek client platform. This gives linting support for browser, node and test environments. Also some specialized packages like react, prettier etc...

For the legacy platform please use [eslint-config-gfp](https://github.com/mrgreentech/eslint-config-gfp).

## How to use

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

## Plugins

To use **compat rules** (lint the browser compatibility of your code):

```
{
    "extends": "gametek/plugins/compat"
}
```

To use **prettier rules** (disables conflicting rules):

```
{
    "extends": "gametek/plugins/prettier"
}
```

To use **prettier-react rules** (disables conflicting rules):

```
{
    "extends": "gametek/plugins/prettier-react"
}
```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the eslint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.
