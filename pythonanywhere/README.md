# Deploy Pere e Tshweu Sengangata to PythonAnywhere

## How It Works

This is a static React app served by a tiny Flask wrapper. All media (photos, videos, banners) are stored in **Lovable Cloud** — they sync automatically across all browsers and devices. The PythonAnywhere server just serves the HTML/CSS/JS files.

## Quick Steps

### First-time setup

1. **Build the site** locally (or download the built files):
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with all the files.

2. **Upload to PythonAnywhere:**
   - Log in to [PythonAnywhere](https://www.pythonanywhere.com)
   - Go to **Files** tab
   - Create a folder: `/home/yourusername/pere_website`
   - Upload these files into it:
     - `pythonanywhere/app.py` → `/home/yourusername/pere_website/app.py`
     - `pythonanywhere/requirements.txt` → `/home/yourusername/pere_website/requirements.txt`
     - The entire `dist/` folder → `/home/yourusername/pere_website/dist/`

3. **Install dependencies:**
   - Open a **Bash console** from the Consoles tab
   - Run:
     ```bash
     cd ~/pere_website
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

### Updating the site

When you make changes in Lovable:

1. Build: `npm run build`
2. Upload only the new `dist/` folder to PythonAnywhere (replace the old one)
3. Reload the web app

**Note:** You do NOT need to re-upload `app.py` or `requirements.txt` unless they changed.

**Media uploads are instant:** Since images and videos are stored in Lovable Cloud, any media you add/remove via the website UI is immediately available on PythonAnywhere too — no redeployment needed!

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

- **Pages show 404 on refresh:** Make sure `app.py` is set up correctly with the catch-all route
- **Styles/images missing:** Make sure the entire `dist/` folder was uploaded including `dist/assets/`
- **Media not showing:** The site connects to Lovable Cloud for uploaded media — make sure your PythonAnywhere site can reach the internet (free accounts can)
- **Replace `yourusername`** everywhere with your actual PythonAnywhere username
