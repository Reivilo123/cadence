# Reconstruit Cadence.apk après une modification de ../cadence.html
Set-Location $PSScriptRoot
node build-www.js
npx cap sync android
Set-Location android
.\gradlew.bat assembleDebug --no-daemon
Set-Location $PSScriptRoot
Copy-Item android\app\build\outputs\apk\debug\app-debug.apk ..\Cadence.apk -Force
Write-Host "APK prêt : ..\Cadence.apk"
