

## ⚙️ Setup Instructions

### 🔹 1. Backend

```bash
cd Helper_API
dotnet restore
dotnet run
```

Backend runs on:

```
http://localhost:5142
```

---

### 🔹 2. Frontend (Development Mode)

```bash
cd reactBotUI
npm install
npm run dev
```



---

### 🔹 3. Production Mode (Combined App)

```bash
cd reactBotUI
npm run build
```

Copy build to backend:

```powershell
Remove-Item -Recurse -Force ..\Helper_API\wwwroot\*

Copy-Item -Recurse -Force .\dist\* ..\Helper_API\wwwroot\
```

Run backend:

```bash
cd ../Helper_API
dotnet run
```

Open:

```
http://localhost:5142
```

---


