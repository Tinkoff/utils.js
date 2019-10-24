/* eslint-disable import/no-commonjs,no-underscore-dangle */
const ASTNodeContainer = require('esdoc/out/src/Util/ASTNodeContainer.js').default;

class EsdocCurry {

    getCurryN(node) {
        if (node.params) {
            return node.params.filter(x => x.type === 'Identifier').length;
        }
    }

    findDeclaration(name, ast) {
        if (!name) { return null; }

        for (const node of ast.program.body) {
            if (node.type === 'FunctionDeclaration' && node.id.name === name) {
                return node;
            }

            if (node.type === 'VariableDeclaration' && node.declarations[0].id.name === name) {
                return node.declarations[0].init;
            }
        }

        return null;
    }

    onHandleAST(ev) {
        const ast = ev.data.ast;

        for (const decl of ast.program.body) {
            if (decl.type === 'ExportDefaultDeclaration') {
                const inner = decl.declaration;

                if (inner.type === 'CallExpression'
                    && (inner.callee.name === 'curry' || inner.callee.name === 'curryN')) {
                    const args = inner.arguments;

                    decl.declaration = args[args.length - 1];

                    if (decl.declaration.type === 'Identifier') {
                        decl.declaration = this.findDeclaration(decl.declaration.name, ast);
                    }

                    if (args[0].type === 'NumericLiteral') {
                        decl.declaration._curryN = args[0].value;
                    } else {
                        decl.declaration._curryN = this.getCurryN(decl.declaration);
                    }
                }
            }
        }
    }

    onHandleDocs(ev) {
        for (const doc of ev.data.docs) {
            if (doc.kind === 'function') {
                const node = ASTNodeContainer.getNode(doc.__docId__);

                if (node._curryN) {
                    doc.export = true;
                    doc.description = `*Autocurry for ${node._curryN} arguments*<br><br>${doc.description}`;
                }
            }
        }
    }
}

module.exports = new EsdocCurry();
