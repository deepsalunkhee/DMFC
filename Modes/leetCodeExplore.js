
// Apply dark mode styles and save the state in local storage.
function applyDarkMode() {
    //for the background
    document.getElementById("base_content").style.backgroundColor = "#2B2A2A";
    document.getElementById("navbar-root").style.height = "40px";
    document.getElementById("leetcode-navbar").style.backgroundColor = "#2B2A2A";
  
    // for the navbar text
    var elements = document.getElementsByClassName("text-text-secondary");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }

    //the base content of the home page
    document.getElementById("explore-app").style.color = "white";
  
   
  }
  
  // Remove dark mode styles to revert to the default styles.
  function removeDarkMode() {
    // Remove the dark mode styles to revert to the default appearance.
    document.getElementById("base_content").style.backgroundColor = '';
    document.getElementById("navbar-root").style.height = "";
    document.getElementById("leetcode-navbar").style.backgroundColor = '';
  
    // Get all elements with the class "text-text-secondary" and change their color to default
    var elements = document.getElementsByClassName("text-text-secondary");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "";
    }

    //reverting the color of the  base content of the home page
    document.getElementById("explore-app").style.color = "";
   
  }
  
  // Function to check and apply dark mode when the page loads.
  function checkAndApplyDarkMode() {
    chrome.storage.local.get(['darkModeEnabled'], function (result) {
        var darkModeEnabled = result.darkModeEnabled;
  
        if (darkModeEnabled) {
            applyDarkMode();
        }
    });
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
  