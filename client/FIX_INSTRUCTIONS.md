# Fix Instructions: Missing `framer-motion` Dependency

The error `[plugin:vite:import-analysis] Failed to resolve import "framer-motion"` occurs because the package is not installed in your project.

## Steps to Fix

I have already updated your `package.json` to include the missing dependencies. You just need to install them.

1.  **Stop the Development Server**:
    Press `Ctrl + C` in your terminal to stop the running Vite server.

2.  **Install Dependencies**:
    Run the following command to install the new packages:
    ```bash
    npm install
    ```
    *If you use Yarn:*
    ```bash
    yarn install
    ```

3.  **Restart the Server**:
    Start the development environment again:
    ```bash
    npm run dev
    ```

## Verification Checklist
- [ ] `node_modules/framer-motion` folder exists.
- [ ] Server starts without "Failed to resolve import" errors.
- [ ] Chat Application loads with animations.

## Troubleshooting
If the error persists after installing:
1.  **Clear Cache**:
    ```bash
    rm -rf node_modules
    npm install
    ```
2.  **Check Vite Config**:
    Ensure `vite.config.js` does not have any `alias` misconfigurations (currently mostly default).
