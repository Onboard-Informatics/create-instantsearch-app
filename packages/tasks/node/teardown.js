const chalk = require('chalk');
const { isYarnAvailable } = require('../../shared/utils');

module.exports = function teardown(config) {
  if (!config.silent) {
    try {
      const hasYarn = isYarnAvailable();
      const installCommand = hasYarn ? 'yarn' : 'npm install';
      const startCommand = hasYarn ? 'yarn start' : 'npm start';

      console.log();
      console.log(
        `🎉  Created ${chalk.bold.cyan(config.name)} at ${chalk.green(
          config.path
        )}.`
      );
      console.log();

      console.log('Begin by typing:');
      console.log();
      console.log(`  ${chalk.cyan('cd')} ${config.path}`);

      if (config.installation === false) {
        console.log(`  ${chalk.cyan(`${installCommand}`)}`);
      }

      console.log(`  ${chalk.cyan(`${startCommand}`)}`);
      console.log();
      console.log('⚡️  Start building something awesome!');
    } catch (err) {
      console.log();
      console.error(chalk.red('🛑  The app generation failed.'));
      console.error(err);
      console.log();

      return Promise.reject(err);
    }
  }

  return Promise.resolve();
};
