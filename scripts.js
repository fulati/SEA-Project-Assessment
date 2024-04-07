/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

import { workouts } from "./workouts.js";
import { quotes } from "./quotes.js";

// This is an array of objects (workouts)

//Motivational Quotes

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

//SEARCHING AND FILTERING DISPLAY FEATURE ----------------------------
// This function adds cards the page to display the data in the array
function showCards() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  console.log("SearchInput: " + searchInput);

  const filtersCheckBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const selectedBodyParts = [];
  let bodyWeightChecked = false;
  let compoundChecked = false;

  //Determine which checkboxes are checked
  for (let i = 0; i < filtersCheckBoxes.length; i++) {
    const checkbox = filtersCheckBoxes[i];
    if (checkbox.value === "Body Weight") {
      bodyWeightChecked = true;
    } else if (checkbox.value === "Compound") {
      compoundChecked = true;
    } else {
      selectedBodyParts.push(checkbox.value);
    }
  }

  const filteredWorkouts = workouts.filter((workout) => {
    //Matches based on the search feature
    const searchNameMatches = workout.name.toLowerCase().includes(searchInput);

    //Matches based on the checkbox filters
    const bodyPartMatches =
      selectedBodyParts.length === 0 ||
      bodyPartFilter(workout, selectedBodyParts);

    //Matches based on the body weight checkbox
    const bodyWeightMatches = !bodyWeightChecked || workout.bodyweight;

    //Matches based on the compound workout checkbox
    const compoundMatches = !compoundChecked || workout.compound;

    return (
      searchNameMatches &&
      bodyPartMatches &&
      bodyWeightMatches &&
      compoundMatches
    );
  });
  console.log("filteredWorkouts: " + filteredWorkouts);

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  //If no result is found from the search
  if (filteredWorkouts.length === 0) {
    const noWorkoutFoundText = document.createElement("h1");
    noWorkoutFoundText.textContent = "No Workout Found!";
    noWorkoutFoundText.setAttribute("id", "noWorkoutFound");
    cardContainer.appendChild(noWorkoutFoundText);
  } else {
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < filteredWorkouts.length; i++) {
      let workout = filteredWorkouts[i];

      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, workout); // Edit title and image
      cardContainer.appendChild(nextCard); // Add new card to the container
    }
  }
}

//Filter the workout based on selectedFilters
function bodyPartFilter(workout, selectedBodyParts) {
  for (let i = 0; i < selectedBodyParts.length; i++) {
    if (workout.bodyPart.includes(selectedBodyParts[i])) {
      return true;
    }
  }
  return false;
}

//Edit Card Content Method
function editCardContent(card, workout) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = workout.name;

  const cardImage = card.querySelector("img");
  cardImage.src = workout.img;
  cardImage.alt = workout.name + " image";

  const cardContent = card.querySelector(".card-content");
  const workoutDetails = cardContent.querySelector("ul");
  workoutDetails.innerHTML = `
    <li><b>Body Part</b>: ${workout.bodyPart}</li>
    <li><b>Bodyweight</b>: ${workout.bodyweight ? "Yes" : "No"}</li>
    <li><b>Compound</b>: ${workout.compound ? "Yes" : "No"}</li>
    <li><b>Equipment</b>: ${workout.equipment}</li>
  `;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  //console.log("new card:", newTitle, "- html: ", card);
}

//Show all workout Method
function showAllWorkout() {
  const filtersCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < filtersCheckBoxes.length; i++) {
    filtersCheckBoxes[i].checked = false;
  }

  showCards();
}

//MOTIVATIONAL QUOTES FEATURE ----------------------------------

//Generates random quotes
function quoteGenerator() {
  const quote = document.getElementById("quote");
  const popup = document.getElementById("motivationPopUp");
  if (popup) {
    const randomIndex = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = randomIndex.quote + " - " + randomIndex.author;
    popup.style.display = "block"; // Show the popup
  }
}

// Function to close the popup when the close button is clicked
function closePopup() {
  const popup = document.getElementById("motivationPopUp");
  if (popup) {
    popup.style.display = "none"; // Hide the popup
  }
}

// Function to close the popup when clicking outside of it
window.onclick = function (event) {
  const popup = document.getElementById("motivationPopUp");
  if (event.target === popup) {
    popup.style.display = "none"; // Hide the popup
  }
};

//TODAY'S WORKOUT FEATURE ---------------------------------------

//Hide All Cards
function hideAllCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear the card container
}

//Today's workout array and nonRepeatIndex array
let todaysWorkoutCards = [];
let nonRepeatIndex = [];

//Display Today's Workout
function showTodaysCards() {
  //Hide all the workouts before showing today's workouts
  hideAllCards();

  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  // Clear today's workout array
  todaysWorkoutCards = [];

  // Clear nonRepeatIndex array
  nonRepeatIndex = [];

  //Display only 6 workouts for the day
  for (let i = 0; i < 6; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * workouts.length);
    } while (nonRepeatIndex.includes(randomIndex)); // Keep generating new index until it's unique

    // Add the random index to the non-repeat index array
    nonRepeatIndex.push(randomIndex);

    let workout = workouts[randomIndex];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, workout); // Edit title and image
    todaysWorkoutCards.push(nextCard);
    cardContainer.appendChild(nextCard); // Add new card to the container
  }

  const counterText = document.getElementById("completedWorkoutText");
  counterText.textContent = "0/6 Complete";
}

//Remove Workout Method
function removeFirstCard() {
  if (todaysWorkoutCards.length > 0) {
    const todaysFirstWorkout = todaysWorkoutCards.shift(); // Remove first item in workout array
    const cardContainer = document.getElementById("card-container");
    cardContainer.removeChild(todaysFirstWorkout); // Remove the card

    const counterText = document.getElementById("completedWorkoutText");
    counterText.textContent = `${6 - todaysWorkoutCards.length}/6 Complete`;
  }
}

// This calls all the functions when the page is first loaded as well as if any of the events occurs
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the "search" input
  const searchInput = document.getElementById("searchInput");
  if (searchInput != null) {
    searchInput.addEventListener("input", showCards);
  }

  // Add event listener for the checkboxes
  const filtersCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < filtersCheckBoxes.length; i++) {
    filtersCheckBoxes[i].addEventListener("click", showCards);
  }

  // Add event listener for the "Get Motivation" button
  const getMotivationButton = document.getElementById("getMotivationButton");
  getMotivationButton.addEventListener("click", quoteGenerator);

  // Add event listener for the "closePopUp" button
  const closePopUpButton = document.getElementById("closeButton");
  closePopUpButton.addEventListener("click", closePopup);

  // Add event listener for the "Show All Workout" button
  const showAllWorkoutButton = document.getElementById("showAllWorkoutButton");
  showAllWorkoutButton.addEventListener("click", showAllWorkout);

  // Add event listener for the "Today's Workout" button
  const todaysWorkoutButton = document.getElementById("todaysWorkoutButton");
  todaysWorkoutButton.addEventListener("click", showTodaysCards);

  // Add event listener for the "Remove Workout" button
  const removeWorkoutButton = document.getElementById("removeWorkoutButton");
  removeWorkoutButton.addEventListener("click", removeFirstCard);

  showCards(); // Ensure that cards are displayed initially
});
