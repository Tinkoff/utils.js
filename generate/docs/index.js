const path = require('path');
const fsExtra = require('fs-extra');
const execa = require('execa');
const ESDocCLI = require('esdoc/out/src/ESDocCLI').default;
const ghpages = require('gh-pages');

const root = path.join(__dirname, '..', '..');
const docsPath = path.join(root, 'docs');
const tsTemp = path.join(root, 'ts_temp');

const clearDocsPath = () =>
    Promise.all([fsExtra.remove(docsPath), fsExtra.remove(tsTemp)]);

const runEsdoc = () => {
    const cli = new ESDocCLI([]);

    cli.exec();
};

const copyFiles = () =>
    Promise.all([
        fsExtra.copy(
            path.join(__dirname, '404.html'),
            path.join(docsPath, '404.html')
        ),
        fsExtra.copy(
            path.join(__dirname, '.nojekyll'),
            path.join(docsPath, '.nojekyll')
        ),
    ]);

const publishDocs = () =>
    new Promise((resolve, reject) => {
        ghpages.publish(docsPath, { dotfiles: true }, (err) =>
            err ? reject(err) : resolve(err)
        );
    });

const buildTs = () => execa.shell('tsc -p tsconfig.json');

const generate = async () => {
    await clearDocsPath();
    await buildTs();
    await runEsdoc();
    await copyFiles();
    await publishDocs();
    await clearDocsPath();
};

generate();
