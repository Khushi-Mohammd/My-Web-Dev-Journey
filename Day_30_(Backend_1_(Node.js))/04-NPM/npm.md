# npm (Node Package Manager)

npm is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages (libraries/modules).

## Key Features of npm:

- It allows developers to install third-party libraries easily.
- It helps manage project dependencies in a structured way.
- It provides a registry where developers can publish their own packages.
- It maintains a 'package.json' file that stores metadata and dependencies for a project.

## Common npm Commands:

- `npm init` → Initializes a new project and creates a 'package.json' file.
- `npm install <package-name>` → Installs a package from the npm registry.
- `npm install` → Installs all dependencies listed in 'package.json'.
- `npm uninstall <package-name>` → Removes a package.
- `npm update` → Updates all installed packages to their latest versions.
- `npm list` → Lists installed packages.

npm is essential for modern JavaScript development, especially for managing dependencies in projects using frameworks like React, Angular, and Express.js.

---

## When we install a package using npm, it creates the following files and folders:

### 1️⃣ node_modules (Folder)

- This folder contains all installed packages and their dependencies.
- When we install a package, npm downloads it from the registry and stores it here.
- If the package has dependencies, npm also installs them inside this folder.
- It is usually not pushed to GitHub because it can be regenerated using 'package.json'.

### 2️⃣ package.json (File)

- This is the main configuration file for a Node.js project.
- It stores important metadata about the project, including:
  - Project name, version, and description.
  - List of installed dependencies and their versions.
  - Scripts for running tasks like testing or starting the server.
- Example content of 'package.json':
  ```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
      "express": "^4.18.2"
    }
  }
  ```
- This file ensures that all team members use the same package versions.

### 3️⃣ package-lock.json (File)

- This file locks the exact versions of installed dependencies.
- It ensures that when someone else installs dependencies using 'npm install', they get the same versions as the original developer.
- It also improves installation speed by storing package details.

🔹 **In summary:**

- 'node_modules' stores the actual package files.
- 'package.json' lists project dependencies.
- 'package-lock.json' ensures consistent versions across different setups.

---

# npm Global Install vs Local Install

## 1️⃣ Local Install (Default)

- Command: `npm install <package-name>`
- Installs the package inside the `node_modules` folder of the current project.
- The package is only available for that specific project.
- Example: `npm install express` (installs Express for this project only).

## 2️⃣ Global Install

- Command: `npm install -g <package-name>`
- Installs the package globally, making it available system-wide.
- It is useful for CLI tools that need to be accessed from any project.
- Example: `npm install -g nodemon` (installs nodemon globally).
- Global packages are stored in a system-wide directory:
  - Windows: `C:\Users\<User>\AppData\Roaming\npm`
  - macOS/Linux: `/usr/local/lib/node_modules`

### ✅ Check Installed Global Packages:

- Command: `npm list -g --depth=0`

---

# npm link

## 🔹 Purpose:

- `npm link` is used for **creating symbolic links** between a local package and a project.
- Helps in local development when working on a package that will be used in multiple projects.
- Instead of installing it normally, we can link it directly.

## 🔹 How It Works:

1. Navigate to the package directory:
   ```bash
   cd my-package
   ```
2. Run `npm link` to register the package globally:
   ```bash
   npm link
   ```
3. Navigate to the project where you want to use this package:
   ```bash
   cd my-project
   ```
4. Run `npm link <package-name>` to link it:
   ```bash
   npm link my-package
   ```

- This makes `my-package` available in `my-project` without actually installing it from the npm registry.

## 🔹 To Remove the Link:

```bash
npm unlink my-package
```

```bash
npm unlink -g my-package
```

## ✅ When to Use `npm link`?

- When developing and testing custom npm packages before publishing them.
- When working on multiple projects that use the same package.

## 🔹 Summary:

- `npm install -g` installs packages globally.
- `npm link` is used for linking local packages instead of installing them from npm.
