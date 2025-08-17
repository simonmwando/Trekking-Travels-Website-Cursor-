@echo off
echo Building and deploying to GitHub Pages...
echo.
echo Step 1: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Step 2: Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo Deployment failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Deployment successful! Your site should be available at:
echo https://[your-github-username].github.io/trekking-travels
echo.
echo Note: It may take a few minutes for changes to appear.
pause
