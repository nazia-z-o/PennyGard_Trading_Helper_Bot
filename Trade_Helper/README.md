Bash Command to build and run the application:
```bash
cd reactBotUI
npm run build

Remove-Item -Recurse -Force ..\Helper_API\wwwroot\*

cp -r dist/* ../Helper_API/wwwroot/

cd ../Helper_API
dotnet run