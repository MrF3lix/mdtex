import * as vscode from 'vscode';

const extensionKey = 'mdtex';

export const getConfigItem = (configKey: string) => vscode.workspace.getConfiguration(extensionKey)[configKey];
export const infoMessage = (message: string) => vscode.window.showInformationMessage(`${extensionKey}: ${message}`);
export const errorMessage = (message: string) => vscode.window.showErrorMessage(`${extensionKey}: ${message}`);
