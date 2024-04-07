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

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

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
    // matches based on the search feature
    const searchNameMatches = workout.name.toLowerCase().includes(searchInput);

    // matches based on the checkbox filters
    const bodyPartMatches =
      selectedBodyParts.length === 0 ||
      bodyPartFilter(workout, selectedBodyParts);

    const bodyWeightMatches = !bodyWeightChecked || workout.bodyweight;
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
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filteredWorkouts.length; i++) {
    let workout = filteredWorkouts[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, workout); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function bodyPartFilter(workout, selectedBodyParts) {
  for (let i = 0; i < selectedBodyParts.length; i++) {
    if (workout.bodyPart.includes(selectedBodyParts[i])) {
      return true;
    }
  }
  return false;
}

// This calls the addCards() function when the page is first loaded
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

function quoteAlert() {
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeFirstCard() {
  workouts.shift(); // Remove first item in workout array
  showCards(); // Call showCards again to refresh
}

function showAllWorkout() {
  const filtersCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < filtersCheckBoxes.length; i++) {
    filtersCheckBoxes[i].checked = false;
  }

  showCards();
}
