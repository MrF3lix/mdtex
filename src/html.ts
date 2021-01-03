import * as path from 'path';
import * as fs from 'fs';
import { errorMessage, getConfigItem, infoMessage } from './vscode-helper';

export const saveAsHtml = (arg: any, markdownIt: any) => {
    try {
        const parsedPath = path.parse(arg.fsPath);
        const content = renderHtml(parsedPath, markdownIt);
        const outputLocation = path.join(parsedPath.dir, getConfigItem('autoSaveAsHtmlDir'), `${parsedPath.name}.html`);

        fs.writeFileSync(outputLocation, content);
    } catch (err) {
        errorMessage(`Something went wrong while exporting to HTML: ${err.message}`);
    }
};

export const renderHtml = (docPath: any, markdownIt: any) => {
    const rawContent = fs.readFileSync(path.join(docPath.dir, docPath.base), 'utf8');
    const htmlContent = markdownIt.render(rawContent);

    return htmlTemplate(docPath.name, htmlContent);
};

const htmlTemplate = (documentTitle: any, content: any) => `
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css">

    <link rel="stylesheet" href="${getConfigItem('codeHighlightStylesheet')}" />
    <link rel="stylesheet" href="${getConfigItem('markdownStylesheet')}" />
    <link rel="stylesheet" href="${getConfigItem('customStylesheet')}" />
    <style>
        @media print {
            .markdown-body * {
                font-size: 0.9em;
            }
            .markdown-body h1 {
                font-size: 1.7rem;
            }
            .markdown-body h2 {
                font-size: 1.5rem;
            }
            .markdown-body h3 {
                font-size: 1.2rem;
            }
        }
    </style>
    <meta charset="UTF-8">
    <title>${documentTitle}</title>
</head>
<body class="markdown-body">
    ${content}
</body>
</html>
`.replace(/<img src="vscode-resource:/g, '<img src="');