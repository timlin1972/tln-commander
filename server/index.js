const Cli = require('./tln-cli');

const cli = new Cli();

cli.run('load logger')
    .then(() => cli.run('add cli logger'))
    .then(() => cli.run('load i18n'))
    .then(() => cli.run('start i18n'))
    .then(() => cli.run('add cli i18n'))
    .then(() => cli.run('load libToken'))
    .then(() => cli.run('load graphqlMgr'))
    .then(() => cli.run('load iam'))
    .then(() => cli.run('load webServer'))
    .then(() => cli.run('load graphqlServer'))
    .then(() => cli.run('start webServer'))
    .then(() => cli.run('set graphqlServer httpServer'))
    .then(() => cli.run('set graphqlServer httpsServer'))
    .then(() => cli.run('start graphqlServer'))
    .then(() => cli.run('load wol'))
    .then(() => cli.run('wol show'))
    // .then(() => cli.run('wol sendWol', '0'))
    .then(() => console.log('end'))
    .catch(err => console.log(err));
