import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.select", () => {
      vscode.commands.executeCommand("workbench.debug.action.focusRepl");
      setTimeout(()=>{
        vscode.commands.executeCommand("workbench.action.debug.selectandstart");
      }, 500)
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.debug", () => {
      vscode.commands.executeCommand("workbench.action.debug.start");
      vscode.commands.executeCommand("workbench.debug.action.focusRepl");
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.restart", () => {
      vscode.commands.executeCommand("workbench.action.debug.restart");
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("run-button.stop", () => {
      vscode.commands.executeCommand("workbench.action.debug.stop");
    })
  );
}

export function deactivate() {}
