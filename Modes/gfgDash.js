// Apply dark mode styles and save the state in local storage.
function applyDarkMode() {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the heading navbar
  var Nav = document.querySelector(".nav-wrapper");

  Nav.style.background="black"

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the search bar on the nav
  // Get the input element
    var inputElement = document.getElementById('gs_id50');

    // Change the background color
    inputElement.style.backgroundColor = '#191B2B';

    // Change the text color
    inputElement.style.color = 'white';
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // over all background

  var profilecontainer = document.querySelectorAll(".row");
  profilecontainer[4].style.setProperty('padding-top', '20px', 'important');
  profilecontainer[4].style.setProperty('background', 'black', 'important');
  profilecontainer[4].style.setProperty('margin-bottom', '0px', 'important');
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the info section

  // Get the main div containing all the div elements
  var Profile = document.querySelector(
    ".profile_details_section.activity-container-1.section_card"
  );
  Profile.style.background = "#191B2B";

  var prfilename = document.querySelector(".profile_name");
  prfilename.style.color = "wheat";

  var prfilerank = document.querySelector(".profile_rank_div");
  prfilerank.style.color = "wheat";

  var potdName = document.querySelector(".potd_streak_middle");
  potdName.style.color = "wheat";

  // Get the <span> element inside the potd_name div
  var spanElement = document.querySelector(".potd_name span");

  // Change the color to wheat
  spanElement.style.color = "wheat";

  var basicDetailData = document.querySelectorAll(".basic_details_data a");
var basicDetailName = document.querySelectorAll(".basic_details_name");
var basicDetailData1 = document.querySelectorAll(".basic_details_data");

// Change the color of the <a> tag inside .basic_details_data
for (let index = 0; index < basicDetailData.length; index++) {
    basicDetailData[index].style.setProperty("color", "#EBECD5", "important");
}

// Change the color of the entire element with .basic_details_name
for (let index = 0; index < basicDetailName.length; index++) {
    basicDetailName[index].style.setProperty("color", "wheat", "important");
}

// Change the color of the entire element with .basic_details_data
for (let index = 0; index < basicDetailData1.length; index++) {
    basicDetailData1[index].style.setProperty("color", "#EBECD5", "important");
}


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //The score card section

  // Get the main div containing all the score cards
  var mainDiv = document.querySelector(".score_cards_container");

  // Get all the child divs within the main div
  var scoreCards = mainDiv.querySelectorAll(".score_card");

  // Iterate through each score card div
  for (let index = 0; index < 3; index++) {
    scoreCards[index].style.background = "#464440";

    // Get all elements with the class 'score_card_left' within the current score card
    var cardcontent = scoreCards[index].querySelectorAll(".score_card_left");

    // Example: Log the content of each score card to the console
    cardcontent.forEach(function (card) {
      // Get elements with the class 'score_card_name' and 'score_card_value' within the current score card
      var cardname = card.querySelector(".score_card_name");
      var cardval = card.querySelector(".score_card_value");

      // Update styles or perform other actions as needed
      cardval.style.color = "white";
      cardname.style.color = "wheat";
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

// Remove dark mode styles to revert to the default styles.
function removeDarkMode() {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the heading navbar
  var Nav = document.querySelector(".nav-wrapper");

  Nav.style.background=""
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the search bar on the nav
  // Get the input element
  var inputElement = document.getElementById('gs_id50');

  // Change the background color
  inputElement.style.backgroundColor = '';

  // Change the text color
  inputElement.style.color = 'white';
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  // over all background

  var profilecontainer = document.querySelectorAll(".row");
  profilecontainer[4].style.setProperty('padding-top', '20px', 'important');
  profilecontainer[4].style.setProperty('background', '', 'important');
  profilecontainer[4].style.setProperty('margin-bottom', '0px', 'important');
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //the info section

  // Get the main div containing all the div elements
  var Profile = document.querySelector(
    ".profile_details_section.activity-container-1.section_card"
  );
  Profile.style.background = "";

  var prfilename = document.querySelector(".profile_name");
  prfilename.style.color = "";

  var prfilerank = document.querySelector(".profile_rank_div");
  prfilerank.style.color = "";

  var potdName = document.querySelector(".potd_streak_middle");
  potdName.style.color = "";

  // Get the <span> element inside the potd_name div
  var spanElement = document.querySelector(".potd_name span");

  // Change the color to wheat
  spanElement.style.color = "";

  var basicDetailData = document.querySelectorAll(".basic_details_data a");
var basicDetailName = document.querySelectorAll(".basic_details_name");
var basicDetailData1 = document.querySelectorAll(".basic_details_data");

// Change the color of the <a> tag inside .basic_details_data
for (let index = 0; index < basicDetailData.length; index++) {
    basicDetailData[index].style.setProperty("color", "", "important");
}

// Change the color of the entire element with .basic_details_name
for (let index = 0; index < basicDetailName.length; index++) {
    basicDetailName[index].style.setProperty("color", "", "important");
}

// Change the color of the entire element with .basic_details_data
for (let index = 0; index < basicDetailData1.length; index++) {
    basicDetailData1[index].style.setProperty("color", "", "important");
}



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //The score card section

  // Get the main div containing all the score cards
  var mainDiv = document.querySelector(".score_cards_container");

  // Get all the child divs within the main div
  var scoreCards = mainDiv.querySelectorAll(".score_card");

  // Iterate through each score card div
  for (let index = 0; index < 3; index++) {
    scoreCards[index].style.background = "";

    // Get all elements with the class 'score_card_left' within the current score card
    var cardcontent = scoreCards[index].querySelectorAll(".score_card_left");

    // Example: Log the content of each score card to the console
    cardcontent.forEach(function (card) {
      // Get elements with the class 'score_card_name' and 'score_card_value' within the current score card
      var cardname = card.querySelector(".score_card_name");
      var cardval = card.querySelector(".score_card_value");

      // Update styles or perform other actions as needed
      cardval.style.color = "";
      cardname.style.color = "";
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

// Function to check and apply dark mode when the page loads.
function checkAndApplyDarkMode() {
  chrome.storage.local.get(["darkModeEnabled"], function (result) {
    var darkModeEnabled = result.darkModeEnabled;

    if (darkModeEnabled) {
      applyDarkMode();
    }
  });
}

// Call the checkAndApplyDarkMode function when the content script runs.
window.addEventListener("load", function () {
  checkAndApplyDarkMode();
});

// Listen for messages from the popup script (when the user toggles dark mode).
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check if the message contains an "enableDarkMode" request.
  if (request.enableDarkMode) {
    if (request.enableDarkMode === "on") {
      // If the request is to enable dark mode, apply dark mode styles.
      applyDarkMode();
    } else {
      // If the request is to disable dark mode, remove dark mode styles.
      removeDarkMode();
    }
  }
});
