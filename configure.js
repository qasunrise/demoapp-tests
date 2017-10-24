const YAML = require('yamljs');

const config = YAML.load('.qasunrise');
let runner = null;
runner = require('./runners/local');

// ---- run test
const runnerHelpersOptions = runner.getHelperOptions(config.run_on_credentials, {
  url: config.base_url,
  name: 'Test running tests',
  recordVideo: true,
});

if (require.main === module) {
  // file called directly
  console.log(JSON.stringify({
    helpers: runnerHelpersOptions
  }));
} else {
  // file required as a module
  module.exports = {
    runner,
    base_url: config.base_url,
    name: 'Test run_ning tests',
    helperName: runner.helperName(),
    helpersOptions: runnerHelpersOptions,
    credentials: config.run_on_credentials,
  };
}
