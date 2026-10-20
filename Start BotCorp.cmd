@echo off
cd /d "%~dp0"
if not exist "node_modules\cheerio\package.json" (
  call npm ci --ignore-scripts
  if errorlevel 1 exit /b 1
)
echo Open http://127.0.0.1:8899 after the server starts.
node server.cjs
pause
