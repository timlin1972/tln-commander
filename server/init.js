const fs = require('fs');
const path = require('path');
const { exec } = require("child_process");

const pkgs = [
    {
        dir: 'tln-cli',
    },
    {
        dir: 'tln-logger',
    },
    {
        dir: 'tln-i18n',
    },
    {
        dir: 'tln-lib-token',
    },
    {
        dir: 'tln-graphql-mgr',
    },
    {
        dir: 'tln-iam',
    },
    {
        dir: 'tln-web-server',
    },
    {
        dir: 'tln-graphql-server',
    },
    {
        dir: 'tln-wol',
    },
]

const print_result = (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
}

pkgs.forEach(pkg => {
    console.log(`package: ${pkg.dir}`);
    if (fs.existsSync(path.join(__dirname, pkg.dir))) {
        exec(`cd ${pkg.dir}; git pull; npm i; cd ..`, print_result);
    }
    else {
        exec(`git clone https://github.com/timlin1972/${pkg.dir}.git; cd ${pkg.dir}; npm i; cd ..`, print_result);
    }
    
})