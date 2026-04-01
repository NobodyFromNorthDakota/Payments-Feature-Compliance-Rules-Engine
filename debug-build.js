const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Starting Next.js build...");
  const output = execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
  fs.writeFileSync('build_output.txt', output);
  console.log("Build succeeded!");
} catch (error) {
  console.error("Build failed!");
  fs.writeFileSync('build_output.txt', error.stdout + '\n' + error.stderr);
}
