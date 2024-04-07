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
    bodyPart: "Chest",
    bodyweight: false,
    equipment: "Bench and Barbell",
  },
  {
    name: "Incline Press",
    img: "Assets/incline_press.gif",
    bodyPart: "Chest",
    bodyweight: false,
    equipment: "Bench and Barbell",
  },
  {
    name: "Shoulder Press",
    img: "Assets/shoulder_press.gif",
    bodyPart: "Shoulders",
    bodyweight: false,
    equipment: "Dumbbells or Barbell",
  },
  {
    name: "Lateral Raises",
    img: "Assets/lateral_raises.gif",
    bodyPart: "Shoulders",
    bodyweight: false,
    equipment: "Dumbbells or Cable Machine",
  },
  {
    name: "Skull Crushers",
    img: "Assets/skull_crushers.gif",
    bodyPart: "Triceps",
    bodyweight: false,
    equipment: "E-Z Curl Bar or Dumbbells",
  },
  {
    name: "Tricep Rope Pushdown",
    img: "Assets/tricep_rope_pushdown.gif",
    bodyPart: "Triceps",
    bodyweight: false,
    equipment: "Cable Machine",
  },
  {
    name: "Barbell Rows",
    img: "Assets/barbell_rows.gif",
    bodyPart: "Back",
    bodyweight: false,
    equipment: "Barbell",
  },
  {
    name: "Lat Pull Down",
    img: "Assets/lat_pull_down.gif",
    bodyPart: "Back",
    bodyweight: false,
    equipment: "Lat Pulldown Machine",
  },
  {
    name: "Bicep Curl",
    img: "Assets/bicep_curls.gif",
    bodyPart: "Biceps",
    bodyweight: false,
    equipment: "Dumbell or Barbell",
  },
  {
    name: "Weighted Squat",
    img: "Assets/weighted_squat.gif",
    bodyPart: "Legs",
    bodyweight: false,
    equipment: "Barbell, Squat Rack",
  },
  {
    name: "Deadlift",
    img: "Assets/deadlift.gif",
    bodyPart: "Lower Back, Hamstrings",
    bodyweight: false,
    equipment: "Barbell, Weight Plates",
  },
  {
    name: "Leg Extension",
    img: "Assets/leg_extension.gif",
    bodyPart: "Quadriceps",
    bodyweight: false,
    equipment: "Leg Extension Machine",
  },
  {
    name: "Leg Curls",
    img: "Assets/leg_curls.gif",
    bodyPart: "Hamstrings",
    bodyweight: false,
    equipment: "Leg Curl Machine",
  },
  {
    name: "Crunches",
    img: "Assets/crunches.gif",
    bodyPart: "Abdominals",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Plank",
    img: "Assets/plank.gif",
    bodyPart: "Core",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Lunges",
    img: "Assets/lunges.gif",
    bodyPart: "Legs",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Pistol Squat",
    img: "Assets/pistol_squat.gif",
    bodyPart: "Legs",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Push-ups",
    img: "Assets/push_ups.gif",
    bodyPart: "Chest, Shoulders, Triceps",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Dips",
    img: "Assets/dips.gif",
    bodyPart: "Chest, Shoulders, Triceps",
    bodyweight: true,
    equipment: "Parallel Bars or Dip Station",
  },
  {
    name: "Pull-ups",
    img: "Assets/pull_ups.gif",
    bodyPart: "Back, Biceps",
    bodyweight: true,
    equipment: "Pull-up Bar",
  },
  {
    name: "Pike Push-ups",
    img: "Assets/pike_push_ups.gif",
    bodyPart: "Chest, Triceps, Shoulders",
    bodyweight: true,
    equipment: "None",
  },
  {
    name: "Diamond Push-ups",
    img: "Assets/diamond_push_ups.gif",
    bodyPart: "Chest, Triceps",
    bodyweight: true,
    equipment: "None",
  },
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  console.log("SearchInput: " + searchInput);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchInput)
  );
  console.log("filteredWorkouts: " + filteredWorkouts);

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filteredWorkouts.length; i++) {
    let workout = filteredWorkouts[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, workout); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput != null) {
    searchInput.addEventListener("input", showCards);
  }
  showCards(); // Ensure that cards are displayed initially
});

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
    <li>Body Part: ${workout.bodyPart}</li>
    <li>Bodyweight: ${workout.bodyweight ? "Yes" : "No"}</li>
    <li>Equipment: ${workout.equipment}</li>
  `;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  //console.log("new card:", newTitle, "- html: ", card);
}

function quoteAlert() {
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeFirstCard() {
  workouts.shift(); // Remove first item in workout array
  showCards(); // Call showCards again to refresh
}
