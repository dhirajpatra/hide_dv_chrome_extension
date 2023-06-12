# hide_dv_chrome_extension

To test the extension in development mode in Chrome, follow these steps:

1. Open Google Chrome and type `chrome://extensions` in the address bar.

2. Enable "Developer mode" by toggling the switch located at the top-right corner of the extensions page.

3. Click on the "Load unpacked" button located at the top-left corner of the extensions page.

4. Browse to the folder where you have your extension files (manifest.json, background.js, contentScript.js, popup.html, etc.) and select the folder.

5. Click "Select Folder" to load the extension.

6. The extension should now appear in the list of installed extensions. Ensure that the toggle switch next to the extension is enabled.

7. Test the extension by visiting a webpage, right-clicking, and selecting the "Hide Div" option from the context menu. The selected div should be hidden.

8. To view the popup with the div ID, click on the extension icon in the Chrome toolbar.


Make sure to reload the extension after making any changes to the code by going back to the `chrome://extensions` page and clicking the refresh button (circular arrow) next to the extension.
