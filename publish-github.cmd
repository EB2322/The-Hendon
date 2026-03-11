@echo off
setlocal

cd /d "%~dp0"

echo.
echo Publishing local changes to GitHub...
echo Repository: The-Hendon
echo Branch: main
echo.

set /p COMMIT_MSG=Commit message: 
if "%COMMIT_MSG%"=="" (
  echo Commit message is required.
  exit /b 1
)

git add .
if errorlevel 1 (
  echo git add failed.
  exit /b 1
)

git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
  echo.
  echo Nothing was committed. If there were no new changes, this is expected.
  exit /b 1
)

git push origin main
if errorlevel 1 (
  echo git push failed.
  exit /b 1
)

echo.
echo Changes were pushed to GitHub successfully.
