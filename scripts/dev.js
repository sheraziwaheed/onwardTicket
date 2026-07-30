const { execSync, spawn } = require('child_process')
const path = require('path')

function getListenerPid(port) {
  try {
    const output = execSync(
      `powershell -NoProfile -Command "$conn = Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess; if ($conn) { Write-Output $conn }"`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    )

    const pid = Number.parseInt(output.trim(), 10)
    return Number.isNaN(pid) ? null : pid
  } catch {
    return null
  }
}

const port = 3000
const pid = getListenerPid(port)

if (pid) {
  try {
    execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' })
  } catch {
    // Ignore failures and let Next report any real port issues.
  }
}

const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', 'next')
const child = spawn(nextBin, ['dev', '--port', String(port)], {
  stdio: 'inherit',
  shell: true,
})

child.on('exit', (code) => {
  process.exit(code ?? 0)
})