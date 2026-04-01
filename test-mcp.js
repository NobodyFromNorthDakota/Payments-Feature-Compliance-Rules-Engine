const { spawn } = require('child_process');

console.log("Starting MCP spawn test...");
const child = spawn(
  process.platform === 'win32' ? "cmd.exe" : "npx",
  process.platform === 'win32' ? ["/c", "npx", "-y", "antigravity-notebooklm-mcp"] : ["-y", "antigravity-notebooklm-mcp"], {
    stdio: ['pipe', 'pipe', 'pipe']
  }
);

child.stdout.on('data', (data) => console.log(`STDOUT: ${data.toString()}`));
child.stderr.on('data', (data) => console.error(`STDERR: ${data.toString()}`));

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to start child process.', err);
});
