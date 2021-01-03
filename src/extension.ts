import * as vscode from 'vscode';
import { saveAsHtml } from './html';
import { getConfigItem } from './vscode-helper';

export const activate = (context: vscode.ExtensionContext) => {
    let watcher: any = null;
    let markdownIt: any = null;

    const save = (arg: any) => {
        if(getConfigItem('autoSaveAsHtml')) {
            saveAsHtml(arg, markdownIt);
        }
    };

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (watcher === null && workspaceFolder) {
        const pattern = new vscode.RelativePattern(workspaceFolder, '**/*.md');

        watcher = vscode.workspace.createFileSystemWatcher(pattern, false, false, true);
        watcher.onDidChange(save);
        watcher.onDidCreate(save);

        context.subscriptions.push(watcher);
    }

    return {
        extendMarkdownIt(md: any) {
            const delimiters = getConfigItem('delimiters');
            const options = { engine: require('katex'), delimiters };
            markdownIt = md.use(require('markdown-it-texmath'), options);

            return markdownIt;
        }
    };
};

export const deactivate = () => { };
