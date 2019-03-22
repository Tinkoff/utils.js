const path = require('path');
const walker = require('walker');
const Suite = require('benchmark').Suite;

function createSuite(name, tests) {
    const suite = new Suite(name);

    for (const key in tests) {
        suite.add(key, tests[key]);
    }

    console.log(`${name}:`);

    return suite
        .on('cycle', (event) => {
            console.log(String(event.target));
        })
        .on('complete', () => {
            console.log('_________________\n');
        });
}

const filterRegex = process.argv[2] ? new RegExp(process.argv[2]) : null;

walker(path.resolve(__dirname, 'src'))
    .filterDir((dir) => {
        return !/node_modules/.test(dir);
    })
    .on('file', (file) => {
        if (filterRegex && !filterRegex.test(file)) {
            return;
        }

        if (/__benchmarks__/.test(file)) {
            const tests = require(file).default;

            createSuite(path.relative(__dirname, file), tests).run();
        }
    });
