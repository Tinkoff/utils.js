const path = require('path');
const fsExtra = require('fs-extra');
const ESDocCLI = require('esdoc/out/src/ESDocCLI').default;
const ghpages = require('gh-pages');

const root = path.join(__dirname, '..', '..');
const docsPath = path.join(root, 'docs');

const clearDocsPath = () => fsExtra.remove(docsPath);

const runEsdoc = () => {
    const cli = new ESDocCLI([]);

    cli.exec();
};

const copyErrorPage = () => fsExtra.copy(path.join(__dirname, '404.html'), path.join(docsPath, '404.html'));

const publishDocs = () => new Promise((resolve, reject) => {
    ghpages.publish(docsPath, err => (err ? reject(err) : resolve(err)));
});

const generate = async () => {
    await clearDocsPath();
    await runEsdoc();
    await copyErrorPage();
    await publishDocs();
    await clearDocsPath();
};

generate();
