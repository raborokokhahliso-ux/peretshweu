# Deploy to PythonAnywhere

## Steps

1. **Build the app locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Copy the `dist/` folder** into this `pythonanywhere/` directory.

3. **Upload the entire `pythonanywhere/` folder** to PythonAnywhere (via Files tab or git).

4. **On PythonAnywhere**, open a Bash console and run:
   ```bash
   cd pythonanywhere
   pip install -r requirements.txt
   ```

5. **Set up a Web App:**
   - Go to the **Web** tab → Add a new web app
   - Choose **Flask** and Python 3.10+
   - Set the **Source code** path to `/home/yourusername/pythonanywhere`
   - Set the **WSGI file** to point to `app.py` (update the import in the WSGI config to: `from app import app as application`)

6. **Reload** your web app — your site should be live!
