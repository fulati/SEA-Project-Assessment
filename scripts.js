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

// This is an array of objects (workouts)
let workouts = [
  {
    name: "Bench Press",
    img: "Assets/bench_press.gif",
    bodyPart: ["Chest"],
    bodyweight: false,
    compound: true,
    equipment: "Bench and Barbell",
  },
  {
    name: "Incline Press",
    img: "Assets/incline_press.gif",
    bodyPart: ["Chest"],
    bodyweight: false,
    compound: false,
    equipment: "Bench and Barbell",
  },
  {
    name: "Shoulder Press",
    img: "Assets/shoulder_press.gif",
    bodyPart: ["Shoulders"],
    bodyweight: false,
    compound: true,
    equipment: "Dumbbells or Barbell",
  },
  {
    name: "Lateral Raises",
    img: "Assets/lateral_raises.gif",
    bodyPart: ["Shoulders"],
    bodyweight: false,
    compound: false,
    equipment: "Dumbbells or Cable Machine",
  },
  {
    name: "Skull Crushers",
    img: "Assets/skull_crushers.gif",
    bodyPart: ["Triceps"],
    bodyweight: false,
    compound: true,
    equipment: "E-Z Curl Bar or Dumbbells",
  },
  {
    name: "Tricep Rope Pushdown",
    img: "Assets/tricep_rope_pushdown.gif",
    bodyPart: ["Triceps"],
    bodyweight: false,
    compound: false,
    equipment: "Cable Machine",
  },
  {
    name: "Barbell Rows",
    img: "Assets/barbell_rows.gif",
    bodyPart: ["Back"],
    bodyweight: false,
    compound: true,
    equipment: "Barbell",
  },
  {
    name: "Lat Pull Down",
    img: "Assets/lat_pull_down.gif",
    bodyPart: ["Back"],
    bodyweight: false,
    compound: false,
    equipment: "Lat Pulldown Machine",
  },
  {
    name: "Shrugs",
    img: "Assets/shrugs.gif",
    bodyPart: ["Back"],
    bodyweight: false,
    compound: true,
    equipment: "Dumbell or Barbell",
  },
  {
    name: "Bicep Curl",
    img: "Assets/bicep_curls.gif",
    bodyPart: ["Biceps"],
    bodyweight: false,
    compound: true,
    equipment: "Dumbell or Barbell",
  },
  {
    name: "Hammer Curl",
    img: "Assets/hammer_curl.gif",
    bodyPart: ["Biceps"],
    bodyweight: false,
    compound: false,
    equipment: "Dumbell",
  },
  {
    name: "Weighted Squat",
    img: "Assets/weighted_squat.gif",
    bodyPart: ["Legs"],
    bodyweight: false,
    compound: true,
    equipment: "Barbell, Squat Rack",
  },
  {
    name: "Deadlift",
    img: "Assets/deadlift.gif",
    bodyPart: ["Back", "Legs"],
    bodyweight: false,
    compound: true,
    equipment: "Barbell, Weight Plates",
  },
  {
    name: "Leg Extension",
    img: "Assets/leg_extension.gif",
    bodyPart: ["Legs"],
    bodyweight: false,
    compound: false,
    equipment: "Leg Extension Machine",
  },
  {
    name: "Leg Curls",
    img: "Assets/leg_curls.gif",
    bodyPart: ["Legs"],
    bodyweight: false,
    compound: false,
    equipment: "Leg Curl Machine",
  },
  {
    name: "Crunches",
    img: "Assets/crunches.gif",
    bodyPart: ["Abs"],
    bodyweight: true,
    compound: false,
    equipment: "None",
  },
  {
    name: "Plank",
    img: "Assets/plank.gif",
    bodyPart: ["Abs"],
    bodyweight: true,
    compound: true,
    equipment: "None",
  },
  {
    name: "Lunges",
    img: "Assets/lunges.gif",
    bodyPart: ["Legs"],
    bodyweight: true,
    compound: true,
    equipment: "None",
  },
  {
    name: "Pistol Squat",
    img: "Assets/pistol_squat.gif",
    bodyPart: ["Legs"],
    bodyweight: true,
    compound: false,
    equipment: "None",
  },
  {
    name: "Push-ups",
    img: "Assets/push_ups.gif",
    bodyPart: ["Chest", "Shoulders", "Triceps"],
    bodyweight: true,
    compound: true,
    equipment: "None",
  },
  {
    name: "Dips",
    img: "Assets/dips.gif",
    bodyPart: ["Chest", "Shoulders", "Triceps"],
    bodyweight: true,
    compound: true,
    equipment: "Parallel Bars or Dip Station",
  },
  {
    name: "Pull-ups",
    img: "Assets/pull_ups.gif",
    bodyPart: ["Back", "Biceps"],
    bodyweight: true,
    compound: true,
    equipment: "Pull-up Bar",
  },
  {
    name: "Pike Push-ups",
    img: "Assets/pike_push_ups.gif",
    bodyPart: ["Chest", "Triceps", "Shoulders"],
    bodyweight: true,
    compound: true,
    equipment: "None",
  },
  {
    name: "Diamond Push-ups",
    img: "Assets/diamond_push_ups.gif",
    bodyPart: ["Chest", "Triceps"],
    bodyweight: true,
    compound: true,
    equipment: "None",
  },
];

//Motivational Quotes
let quotes = [
  {
    quote:
      "“I hated every minute of training, but I said, 'Don't quit'. Suffer now and live the rest of your life as a champion.”",
    author: "Muhammad Ali",
  },
  {
    quote:
      "“We are what we repeatedly do. Excellence then is not an act but a habit.”",
    author: "Aristotele",
  },
  {
    quote: "“The body achieves what the mind believes.”",
    author: "Napoleon Hill",
  },
  {
    quote:
      "“The hard days are the best because that's when champions are made, so if you push through, you can push through anything.”",
    author: "Dana Vollmer",
  },
  {
    quote:
      "“If you don't find the time, if you don't do the work, you don't get the results.”",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "“Push harder than yesterday if you want a different tomorrow.”",
    author: "Vincent Williams Sr.",
  },
  {
    quote: "“The real workout starts when you want to stop.”",
    author: "Ronnie Coleman",
  },
  {
    quote:
      "“I've failed over and over again in my life and that is why I succeed.”",
    author: "Michael Jordan",
  },
  {
    quote: "“The secret of getting ahead is getting started.”",
    author: "Mark Twain",
  },
  {
    quote: "“You miss one hundred percent of the shots you don't take.”",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "“Most people fail, not because of lack of desire, but, because of lack of commitment.”",
    author: "Vince Lombardi",
  },
  {
    quote:
      "“Just believe in yourself. Even if you don't, just pretend that you do and at some point, you will.”",
    author: "Venus Williams",
  },
  {
    quote:
      "“If you want something you've never had, you must be willing to do something you've never done.”",
    author: "Thomas Jefferson",
  },
  {
    quote: "“Once you learn to quit, it becomes a habit.”",
    author: "Vince Lombardi",
  },
  {
    quote: "“Do something today that your future self will thank you for.”",
    author: "Sean Patrick Flanery",
  },
  {
    quote: "“What hurts today makes you stronger tomorrow”",
    author: "Jay Cutler",
  },
];

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

// This calls the addCards() function when the page is first loaded as well as if any of the events occurs
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput != null) {
    searchInput.addEventListener("input", showCards);
  }

  const filtersCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < filtersCheckBoxes.length; i++) {
    filtersCheckBoxes[i].addEventListener("click", showCards);
  }

  showCards(); // Ensure that cards are displayed initially
});

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
function todaysWorkout() {
  //Hide all the workouts before showing today's workouts
  hideAllCards();

  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  // Clear today's workout array
  todaysWorkoutCards = [];

  // Indices
  nonRepeatIndex = [];

  //Display only 6 workouts for the day
  for (i = 0; i < 6; i++) {
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
