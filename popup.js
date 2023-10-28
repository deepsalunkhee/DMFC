
// This code executes when the popup HTML has fully loaded in the browser.
document.addEventListener('DOMContentLoaded', function () {
  // Get the reference to the checkbox element with the id "darkModeToggle."
  var darkModeToggle = document.getElementById('darkModeToggle');

  // Retrieve the user's dark mode preference from local storage and set the checkbox accordingly.
  chrome.storage.local.get(['darkModeEnabled'], function (result) {
    darkModeToggle.checked = result.darkModeEnabled;
  });

  // Add an event listener to the checkbox to detect changes (toggling of dark mode).
  darkModeToggle.addEventListener('change', function () {
    // Get the new state of the dark mode toggle (checked or unchecked).
    var darkModeEnabled = true;
    darkModeEnabled = darkModeToggle.checked;

    // Store the new dark mode preference in local storage.
    chrome.storage.local.set({ darkModeEnabled: darkModeEnabled });

    // Send a message to the content script to enable or disable dark mode based on the user's choice.
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script with the user's dark mode preference.
     
      chrome.tabs.sendMessage(tabs[0].id, { enableDarkMode: darkModeEnabled ? 'on' : 'off' });
    });
  });
});

  