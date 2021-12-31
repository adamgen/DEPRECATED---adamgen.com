#!/usr/bin/env node

import 'zx/globals';
import { program } from 'commander';

program.version('0.0.1');

program
    .command('glob-delete')
    .description(`Glob delete a file or directory`)
    .argument('<glob>', 'glob to delete')
    .option('-d --dry-run', 'only console log the outputs')
    .action(async (glob) => {
        globby
            .globbySync(glob)
            .map((file) => path.dirname(file))
            .filter((value, index, self) => self.indexOf(value) === index)
            .forEach((value) => {
                console.log(chalk.blue(`Deleting dir ${value}`))
                fs.removeSync(value);
            });
    });

program.parse();
