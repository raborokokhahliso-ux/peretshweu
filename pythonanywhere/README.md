# Deploy to PythonAnywhere

## Quick Steps

1. **Download** the `pythonanywhere_deploy.zip` file from the chat.

2. **Upload to PythonAnywhere:**
   - Log in to [PythonAnywhere](https://www.pythonanywhere.com)
   - Go to **Files** tab
   - Upload `pythonanywhere_deploy.zip` to your home directory (`/home/yourusername/`)

3. **Extract the ZIP:**
   - Open a **Bash console** from the Consoles tab
   - Run:
     ```bash
     cd ~
     unzip pythonanywhere_deploy.zip
     mv pythonanywhere_package pere_website
     cd pere_website
     pip install -r requirements.txt
     ```

4. **Set up the Web App:**
   - Go to the **Web** tab → **Add a new web app**
   - Choose **Manual configuration** (not Flask!)
   - Select **Python 3.10**
   - In the **Code** section, set:
     - **Source code:** `/home/yourusername/pere_website`
   - Click on the **WSGI configuration file** link and replace ALL contents with:
     ```python
     import sys
     path = '/home/yourusername/pere_website'
     if path not in sys.path:
         sys.path.append(path)
     from app import app as application
     ```
   - Replace `yourusername` with your actual PythonAnywhere username

5. **Reload** your web app — your site should be live!

## File Structure
```
pere_website/
├── app.py              ← Flask server (serves the site)
├── requirements.txt    ← Python dependencies (just Flask)
└── dist/               ← Built website files
    ├── index.html
    ├── robots.txt
    └── assets/         ← CSS, JS, images
```

## Troubleshooting
- If pages show 404 when refreshing, make sure the `app.py` catch-all route is working
- If styles/images are missing, make sure the entire `dist/` folder was uploaded
- Make sure to replace `yourusername` everywhere with your actual username
