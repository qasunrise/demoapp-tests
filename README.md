# Tests package QASunrise Demoapp

## Installing
- Add `"demoapp-tests": "git+https://github.com/qasunrise/demoapp-tests.git"` to dependencies list of your application
- Add `"e2e": "qasunrise-tests"` to scripts list of your application
- Run `npm install`

## Configuring
To run tests locally you need selenium-standalone. To install it run

```bash
npm install selenium-standalone
node_modules/.bin/selenium-standalone install --version=3.4.0
```

Use `--version=3.4.0` because of [this issue](https://github.com/Codeception/CodeceptJS/issues/687#issuecomment-325674646).

Create configuration file `.qasunrise` in your app directory with this contents:

```yml
---
base_url: http://localhost:3000/
```

## Running
To run tests locally you need run selenium server before

```bash
node_modules/.bin/selenium-standalone start --version=3.4.0
```

Then you can run `npm run e2e` in other terminal.
