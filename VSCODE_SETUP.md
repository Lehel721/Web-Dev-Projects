# VS Code Setup Guide for Web Development Projects

This guide will help you set up Visual Studio Code with GitHub Copilot and other essential extensions for working on this repository.

## Table of Contents
1. [Installing VS Code](#installing-vs-code)
2. [Setting Up GitHub Copilot](#setting-up-github-copilot)
3. [Recommended Extensions](#recommended-extensions)
4. [Troubleshooting](#troubleshooting)
5. [Tips and Tricks](#tips-and-tricks)

## Installing VS Code

1. Download VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Run the installer for your operating system
3. Launch VS Code after installation

## Setting Up GitHub Copilot

### Step 1: Get Access to GitHub Copilot

GitHub Copilot requires a subscription. You can get access through:

- **Free for Students**: If you're a verified student, get free access via [GitHub Education](https://education.github.com/)
- **Free for Open Source Maintainers**: Maintainers of popular open-source projects qualify for free access
- **Paid Subscription**: $10/month or $100/year for individuals
- **Enterprise**: Through your organization

To check your eligibility or sign up:
1. Visit [https://github.com/features/copilot](https://github.com/features/copilot)
2. Click "Start free trial" or "Buy now"
3. Follow the subscription process

### Step 2: Install GitHub Copilot Extension

1. Open VS Code
2. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "GitHub Copilot"
4. Click **Install** on both:
   - **GitHub Copilot** - The main extension
   - **GitHub Copilot Chat** - For conversational AI assistance

### Step 3: Sign In to GitHub

1. After installation, you'll see a prompt to sign in
2. Click **Sign in to GitHub**
3. Your browser will open - authorize the application
4. Return to VS Code

### Step 4: Verify Installation

1. Look for the Copilot icon in the bottom right status bar
2. It should show a checkmark or Copilot logo when active
3. Open any `.js`, `.html`, or `.css` file
4. Start typing code - you should see gray suggestion text appear

## Recommended Extensions

This repository includes an `extensions.json` file that will prompt you to install recommended extensions when you open the project. Here's what each extension does:

### Essential Extensions

1. **GitHub Copilot** (`github.copilot`)
   - AI-powered code completions
   - Suggests entire functions and code blocks

2. **GitHub Copilot Chat** (`github.copilot-chat`)
   - Ask questions about your code
   - Get explanations and debugging help
   - Generate code through conversation

3. **Live Server** (`ritwickdey.liveserver`)
   - Launch a local development server with live reload
   - Essential for testing HTML/CSS/JS projects
   - Right-click any HTML file and select "Open with Live Server"

### Code Quality Extensions

4. **Prettier** (`esbenp.prettier-vscode`)
   - Automatic code formatting
   - Ensures consistent code style
   - Formats on save (configured in settings)

5. **ESLint** (`dbaeumer.vscode-eslint`)
   - JavaScript linting
   - Catches common errors
   - Enforces best practices

### Productivity Extensions

6. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
   - Automatically rename paired HTML/XML tags
   - Saves time when refactoring

7. **CSS Peek** (`pranaygp.vscode-css-peek`)
   - Jump to CSS definitions from HTML
   - Peek at CSS without switching files

8. **HTML CSS Support** (`ecmel.vscode-html-css`)
   - Enhanced CSS class and ID completion in HTML
   - IntelliSense for CSS

### Installing All Recommended Extensions

When you open this project in VS Code:
1. You'll see a notification about recommended extensions
2. Click **Install All** to get all extensions at once
3. Alternatively, go to Extensions and look for the "RECOMMENDED" section

## Troubleshooting

### GitHub Copilot Not Working

#### Issue: No suggestions appearing

**Solutions:**
1. Check the status bar icon:
   - Click the Copilot icon (bottom right)
   - Ensure it's not disabled or showing errors

2. Verify your subscription:
   - Go to [https://github.com/settings/copilot](https://github.com/settings/copilot)
   - Check that your subscription is active

3. Sign out and sign back in:
   - Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Type "GitHub Copilot: Sign Out"
   - Then "GitHub Copilot: Sign In"

4. Restart VS Code:
   - Close all VS Code windows
   - Reopen the project

#### Issue: "Copilot not available in this file"

**Solutions:**
- Check file extension (Copilot works with `.js`, `.html`, `.css`, `.py`, etc.)
- Ensure the file is saved (not an untitled file)
- Check if the file type is supported in settings

#### Issue: Network/Connection errors

**Solutions:**
1. Check internet connection
2. Check firewall settings:
   - Copilot needs to communicate with GitHub servers
   - Ensure ports 443 and 80 are not blocked

3. If behind a corporate proxy:
   - Configure VS Code proxy settings
   - Go to Settings > Search "proxy"
   - Set `http.proxy` and `http.proxyStrictSSL`

#### Issue: Extension not installed

**Solutions:**
1. Check Extensions panel for errors
2. Try uninstalling and reinstalling:
   - Right-click on GitHub Copilot extension
   - Select "Uninstall"
   - Reload VS Code
   - Reinstall from Extensions marketplace

### Checking Logs

If problems persist:
1. Open Output panel: `View > Output` (or `Ctrl+Shift+U`)
2. Select "GitHub Copilot" from the dropdown
3. Look for error messages
4. Copy relevant errors when reporting issues

### Common Error Messages

| Error | Solution |
|-------|----------|
| "Copilot subscription not found" | Verify subscription at github.com/settings/copilot |
| "Authentication failed" | Sign out and sign back in |
| "Network request failed" | Check internet connection and proxy settings |
| "Extension host terminated" | Restart VS Code, check for extension conflicts |

## Tips and Tricks

### Using Copilot Effectively

1. **Start with comments**: Write a comment describing what you want, then let Copilot suggest code
   ```javascript
   // Function to convert currency from USD to EUR
   ```

2. **Use descriptive names**: Better names lead to better suggestions
   ```javascript
   function calculateDiscountedPrice(price, discountPercentage) {
     // Copilot will suggest accurate implementation
   ```

3. **Accept/Reject suggestions**:
   - `Tab` - Accept suggestion
   - `Esc` - Reject suggestion
   - `Alt+]` - Next suggestion
   - `Alt+[` - Previous suggestion

4. **Partial acceptance**:
   - `Ctrl+→` - Accept next word
   - Use when you want part of the suggestion

### Using Copilot Chat

Open Copilot Chat:
- Click the chat icon in the sidebar
- Or press `Ctrl+Shift+I` / `Cmd+Shift+I`

Useful chat prompts:
- "Explain this code" (select code first)
- "Fix this bug" (describe the issue)
- "Add error handling to this function"
- "Make this code more efficient"
- "Add comments to explain this code"
- "Convert this callback to async/await"

### Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Toggle Copilot | `Ctrl+Alt+]` | `Cmd+Opt+]` |
| Open Chat | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Accept Suggestion | `Tab` | `Tab` |
| Reject Suggestion | `Esc` | `Esc` |
| Next Suggestion | `Alt+]` | `Opt+]` |
| Previous Suggestion | `Alt+[` | `Opt+[` |

### Live Server Tips

1. **Start server**:
   - Right-click `index.html`
   - Select "Open with Live Server"

2. **Stop server**:
   - Click "Port: 5500" in status bar
   - Or right-click and select "Stop Live Server"

3. **Change port** (if 5500 is in use):
   - Settings > Search "live server port"
   - Change to different port number

### Workspace Settings

The `.vscode/settings.json` file includes:
- Format on save enabled
- Prettier as default formatter
- Auto-save after 1 second
- Tab size set to 2 spaces
- Copilot enabled for relevant file types

You can customize these settings:
1. `File > Preferences > Settings` (or `Ctrl+,`)
2. Search for specific setting
3. Override in user or workspace settings

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [GitHub Copilot Getting Started](https://github.com/features/copilot/getting-started)
- [VS Code Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

## Need More Help?

If you're still experiencing issues:
1. Check [GitHub Copilot Status](https://www.githubstatus.com/)
2. Visit [GitHub Community Discussions](https://github.com/orgs/community/discussions/categories/copilot)
3. Open an issue in this repository with:
   - Description of the problem
   - Steps to reproduce
   - Error messages (from Output panel)
   - Your VS Code version and OS

---

Happy coding with GitHub Copilot! 🚀
