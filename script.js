const questions = [
    "Read Sex+",
    "Held hands romantically",
    "Been on a date",
    "Been barefoot in a building other than a dorm",
    "Been in the library until closing",
    "Climbed a tree on Tava Quad",
    "Been to Minnesota",
    "Gone to Moab for block break",
    "Gotten a mullet or shaved head",
    "Gone to HMI or NOLs",
    "Gone to a hockey game intoxicated",
    "Posted something on yikyak",
    "Dmed someone on yikyak",
    "Done 3+ IM sports",
    "Hiked a 14er",
    "Hiked the manitou incline",
    "Sled down Preserve hill",
    "Sunbathed on Tava Quad or Tutt Circle",
    "Skipped class to go skiing",
    "Joined a club sport",
    "Taken a geology course",
    "Been hit by someone on a skateboard",
    "Played the guitar at someone",
    "Done a climbing competition",
    "Gotten dapped up by Liam",
    "Kept your psych rat",
    "Taken a block off",
    "Successfully slacklined",
    "Hit someone with a frisbee on the quad",
    "Rushed Greek life",
    "Left a groupme",
    "Applied to transfer",
    "Own a melanzana/blunstones",
    "Are from 'just outside of Boston'",
    "Been in a 24hr performance",
    "Gotten food poisoning on campus",
    "Stolen from C store",
    "Had to take a class pass/fail",
    "Gone a block without skipping class",
    "Been to a Farty",
    "Done Fun run",
    "Streaked at crooz",
    "Crashed at crooz",
    "Gotten your pike bike membership taken away",
    "Been on the roof at a party",
    "Hooked up with someone at Cowboys",
    "Gotten a fake confiscated",
    "Hosted a pregame in your room",
    "Been kicked out of a Frat",
    "Been refused entry to a party",
    "Snuck into a party for a club you’re not part of",
    "Gotten drunk/high snacks at 7/11",
    "Been to midnight rastys intoxicated",
    "Been to class intoxicated or pregamed class",
    "Smoked your first cig at CC",
    "Done shrooms",
    "Done coke",
    "Smoked weed on the quad",
    "Thrown up in public on campus",
    "Gotten CCEMS called on you",
    "Had to get a safe ride cause you were too drunk",
    "Set off a fire alarm",
    "Gotten a conduct case",
    "Gotten your nipples pierced",
    "Been in a block with multiple people you’ve hooked up with",
    "Questioned your sexuality",
    "Had a crush on professor",
    "Had a first date in an on-campus dining hall",
    "?",
    "Matched with someone from CC on tinder",
    "Sexiled roommate/been sexiled by a roommate",
    "Skinny dipped on block break",
    "Hooked up with someone on rugby or frisbee",
    "Been in/with someone in an open relationship",
    "Hooked up with Priddy leader/trippee",
    "Hooked up with a block crush",
    "Experimented with non-MPS",
    "Slept in a one night stands bed",
    "Fucked in Flair",
    "Given head to a one-night stand",
    "Had sex on a class field trip or outdoor ed trip",
    "Had sex in a tent or hammock",
    "Gone streaking (not at crooz)",
    "Had sex in an academic building",
    "Had sex in all of the Big 3",
    "Fucked a winter start during block 5",
    "Had sex in a bed that's not either of yours",
    "Fucked in the gendy nooch",
    "Fucked in the common room of dorm hall",
    "Committed an act teamcest",
    "Been pegged/pegged someone",
    "Do you like feet (sexual)",
    "Ate ass",
    "Went back to a situationship",
    "Started dating someone block one of freshman year",
    "Had an orgy",
    "Hooked up with your roomate",
    "Gotten with someone 2+ grades above or below you",
    "Been in the tunnels under campus",
    "Pet a squrriel on campus",
];
const questionsForm = document.getElementById('questions-form');
const submitButton = document.getElementById('submit');
const resultsSection = document.getElementById('results');

// Function to generate test questions dynamically
function generateQuestions() {
    questions.forEach((question, index) => {
        const input = document.createElement('input'); // Define input before setting type
        input.type = 'checkbox'; // Set input type
        input.name = `q${index}`;

        const label = document.createElement('label');
        label.textContent = `${index + 1}. ${question}`;
        label.insertBefore(input, label.firstChild); // Insert checkbox before text
       
        questionsForm.appendChild(label);
        questionsForm.appendChild(document.createElement('br'));
    });
}


 


// Function to calculate test score (higher score for fewer checkboxes checked)
function calculateScore() {
    let score = questions.length; // Start with the maximum score
    questions.forEach((question, index) => {
        const checkbox = document.querySelector(`input[name="q${index}"]:checked`);
        if (checkbox) {
            score--; // Decrement the score for each checked checkbox
        }
    });
    return score;
}


// Function to display test results
function displayResults(score) {
    resultsSection.textContent = `Your CC Purity Test score is: ${score}`;
    resultsSection.style.display = 'block';
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    const score = calculateScore();
    displayResults(score);
});

// Generate questions when the page loads
window.addEventListener('load', generateQuestions);




