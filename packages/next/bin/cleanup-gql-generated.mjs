#!/usr/bin/env zx

const rimrafSync = require('rimraf').sync;

const pwd = (await $`pwd`).toString().trim();

const iterateFolders = (baseDir) => {
    const files = fs.readdirSync(baseDir, { withFileTypes: true });
    files.forEach((dirEntry) => {
        const dirName = dirEntry.name;
        if (
            dirEntry.isDirectory() &&
            !dirName.match(/^\./) &&
            dirName !== 'node_modules'
        ) {
            iterateFolders(path.resolve(baseDir, dirName));
            if (dirName === '__generated__') {
                const unlinked = path.resolve(baseDir, dirName);
                rimrafSync(unlinked);
                console.log(chalk.blue(`Unlinked dir ${unlinked}`));
            }
        }
    }, []);
};

iterateFolders(pwd);
// for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     console.log(fs.lstatSync(file));
// }
