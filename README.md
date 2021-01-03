# MDTeX for Visual Studio Code

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/MrF3lix.mdtex?label=vscode%20marketplace)
![GitHub](https://img.shields.io/github/license/MrF3lix/mdtex)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/MrF3lix/mdtex/CI)

**MDTeX** allows to write math formulas using TeX inside Markdown and preview them using the Visual Studio Code Markdown previewer.

## Features

- Use TeX formulas inside Markdown.
- Auto save as HTML.
- Custom Markdown styles.
- Custom code highlight styles.

## Extension Settings

This extension contributes the following settings:

|Name|Description|Default Value|
|-|-|-|
|`mdtex.delimiters`|Sets the math formula delimiters|`dollars`|
|`mdtex.autoSaveAsHtml`|Automatically generates HTML from MD files|`false`|
|`mdtex.autoSaveAsHtmlDir`|Path to save the generated HTML to, relative to the source file|`""`|
|`mdtex.codeHighlightStylesheet`|Code highlight stylesheet|`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/github-gist.min.css`|
|`mdtex.markdownStylesheet`|Markdown stylesheet|`https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css`|
|`mdtex.customStylesheet`|Custom styles sheet|`""`|
