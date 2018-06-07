/* eslint-disable import/no-commonjs, global-require */
const { prompt } = require('inquirer');
const semver = require('semver');
const LATEST = 'latest';
const ALPHA = 'alpha';
const BETA = 'beta';
const DEV = 'dev';
const possibleNpmDistTags = [LATEST, ALPHA, BETA, DEV];

const promptReleaseVersion = ({ currentVersion, pkgName }) => {
    const alpha = semver.inc(currentVersion, 'prerelease', ALPHA);
    const beta = semver.inc(currentVersion, 'prerelease', BETA);
    const dev = semver.inc(currentVersion, 'prerelease', DEV);

    return prompt({
        type: 'list',
        message: `Select PRERELEASE version ${
            pkgName ? `for ${pkgName} ` : ''
        }(currently ${currentVersion}). Prerelease type will be an npm dist tag`,
        name: 'version',
        choices: [
            {
                value: { version: alpha, npmTag: 'alpha' },
                name: `Alpha (${alpha})`
            },
            {
                value: { version: beta, npmTag: 'beta' },
                name: `Beta (${beta})`
            },
            { value: { version: dev, npmTag: 'dev' }, name: `Dev (${dev})` }
        ]
    }).then(choice => choice.version);
};

const promptNpmDistTag = () =>
    prompt({
        type: 'list',
        message: 'Choose npm dist tag name',
        name: 'npmDistTag',
        choices: possibleNpmDistTags.map(tag => ({ name: tag, value: tag }))
    }).then(answers => answers.npmDistTag);

const promptCustomVersion = () =>
    prompt({
        name: 'version',
        filter: semver.valid,
        message: 'Enter a custom version',
        validate: v => v !== null || 'Must be a valid semver version'
    })
        .then(answers => answers.version)
        .then(version => Promise.all([promptNpmDistTag(), version]))
        .then(([npmTag, version]) => ({
            version,
            npmTag
        }));

const promptVersion = ({ currentVersion, name: pkgName }) => {
    const patch = semver.inc(currentVersion, 'patch');
    const minor = semver.inc(currentVersion, 'minor');
    const major = semver.inc(currentVersion, 'major');
    const prepatch = semver.inc(currentVersion, 'prepatch');
    const preminor = semver.inc(currentVersion, 'preminor');
    const premajor = semver.inc(currentVersion, 'premajor');
    const customChoice = 'CUSTOM';
    const prereleaseChoice = 'PRERELEASE';

    const message = `Select a new version ${
        pkgName ? `for ${pkgName} ` : ''
    }(currently ${currentVersion})`;

    return prompt({
        type: 'list',
        message,
        name: 'version',
        choices: [
            { value: patch, name: `Patch (${patch})` },
            { value: minor, name: `Minor (${minor})` },
            { value: major, name: `Major (${major})` },
            { value: prepatch, name: `Prepatch (${prepatch})` },
            { value: preminor, name: `Preminor (${preminor})` },
            { value: premajor, name: `Premajor (${premajor})` },
            {
                value: prereleaseChoice,
                name: 'Prerelease (alpha, beta or dev)'
            },
            { value: customChoice, name: 'Custom' }
        ]
    })
        .then(answers => answers.version)
        .then(choice => {
            if (choice === customChoice) {
                return promptCustomVersion();
            }
            if (choice === prereleaseChoice) {
                return promptReleaseVersion({ currentVersion, pkgName });
            }

            return { version: choice, npmTag: LATEST };
        });
};

module.exports = {
    promptVersion
};
