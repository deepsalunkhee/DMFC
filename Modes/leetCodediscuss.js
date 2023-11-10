
// Apply dark mode styles and save the state in local storage.
function applyDarkMode() {
    
    //makign the container dark
    document.getElementById("discuss-container").style.backgroundColor = "#2B2A2A";
  }
  
  // Remove dark mode styles to revert to the default styles.
  function removeDarkMode() {
    
  }
  
  // Call the checkAndApplyDarkMode function when the content script runs.
  window.addEventListener('load', function () {
    checkAndApplyDarkMode();
  });
  
  // Listen for messages from the popup script (when the user toggles dark mode).
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // Check if the message contains an "enableDarkMode" request.
    if (request.enableDarkMode) {
        if (request.enableDarkMode === 'on') {
            // If the request is to enable dark mode, apply dark mode styles.
            applyDarkMode();
        } else {
            // If the request is to disable dark mode, remove dark mode styles.
            removeDarkMode();
        }
    }
  });
  