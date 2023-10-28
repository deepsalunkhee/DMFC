// This function applies dark mode styles and saves the state in local storage.
function applyDarkMode() {
    // Change the background color of the "base_content" element
    document.getElementById("base_content").style.backgroundColor = "#2B2A2A";
    document.getElementById("navbar-root").style.height="40px";
    document.getElementById("leetcode-navbar").style.backgroundColor="#2B2A2A";
    // document.getElementById("explore-app").style.color="#FFFFFF";
   

        // Get all elements with the class "text-text-secondary" and change their color to white
    var elements = document.getElementsByClassName("text-text-secondary");
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
}


   
  
    // Find all <p> elements with a specific class
    var storyboardElement = document.querySelector(".col-md-8.storyboard");
  
    if (storyboardElement) {
      // Find all <p> elements within the "storyboardElement"
      var paragraphs = storyboardElement.getElementsByTagName("p");
      var discription = storyboardElement.getElementsByClassName("description");
      var mediaheaf = storyboardElement.getElementsByClassName("media-heading");
  
      // Iterate through the <p> elements and set their text color to white
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "#FFFFFF"; // Set the text color to white
      }

      for (var i = 0; i < discription.length; i++) {
        discription[i].style.color = "#FFFFFF"; // Set the text color to white
      }

        for (var i = 0; i < mediaheaf.length; i++) {
        mediaheaf[i].style.color = "#F9E79F"; // Set the text color to white
        }
  
      // Save the dark mode state in local storage
      chrome.storage.local.set({ darkModeEnabled: true });
    } else {
      console.log("Element with class 'col-md-8 storyboard' not found.");
    }
  }
  

// This function removes dark mode styles to revert to the default styles.
function removeDarkMode() {
  // Remove the dark mode styles to revert to the default appearance.
  document.getElementById("base_content").style.backgroundColor = '';
  document.getElementById("navbar-root").style.height="";
  document.getElementById("leetcode-navbar").style.backgroundColor="";

          // Get all elements with the class "text-text-secondary" and change their color to white
          var elements = document.getElementsByClassName("text-text-secondary");
          for (var i = 0; i < elements.length; i++) {
          elements[i].style.color = "";
          }


  var storyboardElement = document.querySelector(".col-md-8.storyboard");
  
  if (storyboardElement) {
    // Find all <p> elements within the "storyboardElement"
    var paragraphs = storyboardElement.getElementsByTagName("p");
    var discription = storyboardElement.getElementsByClassName("description");
    var mediaheaf = storyboardElement.getElementsByClassName("media-heading");

    // Iterate through the <p> elements and set their text color to white
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = ""; // Set the text color to white
    }

    for (var i = 0; i < discription.length; i++) {
      discription[i].style.color = ""; // Set the text color to white
    }

    for (var i = 0; i < mediaheaf.length; i++) {
        mediaheaf[i].style.color = ""; // Set the text color to white
        }   

    // Save the dark mode state in local storage
    chrome.storage.local.set({ darkModeEnabled: false });
  } else {
    console.log("Element with class 'col-md-8 storyboard' not found.");
  }
  
}

// Check the user's stored preference for dark mode when the page loads.
chrome.storage.local.get(['darkModeEnabled'], function (result) {
  var darkModeEnabled = result.darkModeEnabled;

  // If dark mode is enabled in the storage, apply dark mode styles.
  if (darkModeEnabled) {
    applyDarkMode();
  }
});

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