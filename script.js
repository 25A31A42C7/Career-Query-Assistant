// ================================
// PAGE NAVIGATION
// ================================

const navButtons = document.querySelectorAll(".nav");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navButtons.forEach(button => {
        button.classList.remove("active");
    });

    const page = document.getElementById(pageId);
    const button = document.querySelector(
        `.nav[data-page="${pageId}"]`
    );

    if (page) {
        page.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// Sidebar navigation

navButtons.forEach(button => {

    button.addEventListener("click", () => {
        showPage(button.dataset.page);
    });

});


// Dashboard buttons

document.querySelectorAll("[data-go]").forEach(button => {

    button.addEventListener("click", () => {
        showPage(button.dataset.go);
    });

});


// ================================
// CAREER QUERY
// ================================

const careerButton =
    document.getElementById("careerButton");

if (careerButton) {

    careerButton.addEventListener("click", () => {

        const question =
            document.getElementById("careerInput").value.trim();

        const answer =
            document.getElementById("careerAnswer");

        if (!question) {
            answer.innerHTML =
                "<b>Please enter a career question.</b>";
            return;
        }

        answer.innerHTML = `
            <h3>Career Assistant Result</h3>
            <p><b>Your Question:</b> ${question}</p>
            <br>
            <p><b>Recommended Role:</b> AI/ML Engineer</p>
            <p><b>Match:</b> 91%</p>
            <p><b>Important Skills:</b> Python • Machine Learning • SQL</p>
        `;

    });

}


// ================================
// JOB RESEARCH
// ================================

const researchButton =
    document.getElementById("researchButton");

if (researchButton) {

    researchButton.addEventListener("click", () => {

        const title =
            document.getElementById("jobTitle").value;

        const result =
            document.getElementById("researchResult");

        result.innerHTML = `
            <h3>JOB INSIGHTS</h3>

            <p><b>Job:</b> ${title}</p>

            <br>

            <p><b>Required Skills</b></p>
            <span class="skill good">Python ✓</span>
            <span class="skill good">Machine Learning ✓</span>
            <span class="skill good">SQL ✓</span>

            <br><br>

            <p><b>Preferred Skills</b></p>
            <span class="skill warning">Docker ⚠</span>
            <span class="skill warning">AWS ⚠</span>

            <br><br>

            <p><b>Technologies:</b> Python | TensorFlow | SQL</p>

            <p><b>Responsibilities:</b></p>
            <p>• Build ML models</p>
            <p>• Analyze data</p>
            <p>• Deploy models</p>
        `;

    });

}


// ================================
// RESUME FILE
// ================================

const resumeFile =
    document.getElementById("resumeFile");

if (resumeFile) {

    resumeFile.addEventListener("change", () => {

        const fileName =
            document.getElementById("fileName");

        if (resumeFile.files.length > 0) {

            fileName.textContent =
                "Selected: " + resumeFile.files[0].name;

        }

    });

}


// ================================
// RESUME MATCH
// ================================

const matchButton =
    document.getElementById("matchButton");

if (matchButton) {

    matchButton.addEventListener("click", () => {

        const file =
            document.getElementById("resumeFile").files[0];

        const job =
            document.getElementById("resumeJob").value.trim();

        const result =
            document.getElementById("matchResult");

        if (!file) {

            result.innerHTML =
                "<p>Please upload your PDF resume.</p>";

            return;
        }

        if (!job) {

            result.innerHTML =
                "<p>Please enter the job description.</p>";

            return;
        }

        result.innerHTML = `

            <div class="match-card">

                <p>JOB MATCH</p>

                <div class="score">87%</div>

                <div class="progress">
                    <div style="width:87%"></div>
                </div>

                <h3>✓ Strong Matches</h3>

                <span class="skill good">Python ✓</span>
                <span class="skill good">SQL ✓</span>
                <span class="skill good">Machine Learning ✓</span>
                <span class="skill good">React ✓</span>

                <br><br>

                <h3>⚠ Underrepresented</h3>

                <span class="skill warning">FastAPI ⚠</span>
                <span class="skill warning">REST APIs ⚠</span>

                <br><br>

                <h3>✕ Missing</h3>

                <span class="skill missing">Docker ✕</span>

                <br><br>

                <h3>Recommendations</h3>

                <p>• Add measurable project results</p>
                <p>• Highlight API development</p>
                <p>• Mention relevant ML projects</p>

            </div>
        `;

    });

}


// ================================
// PROJECT INTELLIGENCE
// ================================

const projectButton =
    document.getElementById("projectButton");

if (projectButton) {

    projectButton.addEventListener("click", () => {

        const url =
            document.getElementById("githubUrl").value.trim();

        const result =
            document.getElementById("projectResult");

        if (!url) {

            result.innerHTML =
                "<p>Please enter your GitHub repository URL.</p>";

            return;
        }

        result.innerHTML = `

            <div class="answer">

                <h3>Detected Technologies</h3>

                <span class="skill good">Python ✓</span>
                <span class="skill good">React ✓</span>
                <span class="skill good">Firebase ✓</span>
                <span class="skill good">FastAPI ✓</span>
                <span class="skill good">REST API ✓</span>

                <br><br>

                <h3>Project Evidence</h3>

                <p>AI Resume Analyzer</p>
                <p>├── Python</p>
                <p>├── React</p>
                <p>├── API Integration</p>
                <p>└── Machine Learning</p>

                <br>

                <h3>Resume Representation</h3>

                <p>
                    ⚠ FastAPI appears in the project
                    but is not clearly represented in the resume.
                </p>

            </div>
        `;

    });

}


// ================================
// RESUME GENERATOR
// ================================

const generateButton =
    document.getElementById("generateButton");

if (generateButton) {

    generateButton.addEventListener("click", () => {

        const role =
            document.getElementById("targetRole").value;

        const result =
            document.getElementById("generatedResume");

        result.innerHTML = `

            <div class="match-card">

                <h1>ARIFA YASMEEN</h1>

                <p><b>${role}</b></p>

                <hr><br>

                <h3>SUMMARY</h3>

                <p>
                    AI/ML developer with experience in
                    Python, machine learning, SQL and
                    modern web technologies.
                </p>

                <br>

                <h3>SKILLS</h3>

                <p>
                    Python | Machine Learning | SQL |
                    React | FastAPI
                </p>

                <br>

                <h3>PROJECTS</h3>

                <p>
                    AI Resume Analyzer — Python,
                    React, APIs and Machine Learning.
                </p>

            </div>
        `;

    });

}
// =========================
// CAREER LEARNING FLASHCARDS
// =========================

const flashcards = [
    {
        skill: "SQL",
        question: "What is a primary key?",
        answer: "A primary key is a column or set of columns that uniquely identifies each row in a table."
    },
    {
        skill: "SQL",
        question: "What is a foreign key?",
        answer: "A foreign key is a column that creates a relationship between two tables."
    },
    {
        skill: "SQL",
        question: "What is a JOIN?",
        answer: "A JOIN is used to combine rows from two or more tables based on a related column."
    },
    {
        skill: "SQL",
        question: "What is an INNER JOIN?",
        answer: "An INNER JOIN returns records that have matching values in both tables."
    },
    {
        skill: "SQL",
        question: "What is a LEFT JOIN?",
        answer: "A LEFT JOIN returns all records from the left table and matching records from the right table."
    },
    {
        skill: "SQL",
        question: "What is normalization?",
        answer: "Normalization is the process of organizing database tables to reduce data redundancy."
    },
    {
        skill: "SQL",
        question: "What is GROUP BY?",
        answer: "GROUP BY groups rows with the same values so aggregate functions can be used."
    },
    {
        skill: "SQL",
        question: "What is an index?",
        answer: "An index helps a database find and retrieve rows faster."
    },
    {
        skill: "SQL",
        question: "What is a SQL query?",
        answer: "A SQL query is a command used to retrieve or manipulate data in a database."
    },
    {
        skill: "SQL",
        question: "What is a database?",
        answer: "A database is an organized collection of data that can be stored, managed, and retrieved."
    }
];

let currentFlashcard = 0;
let answerVisible = false;

const skillElement = document.getElementById("flashcardSkill");
const questionElement = document.getElementById("flashcardQuestion");
const answerElement = document.getElementById("flashcardAnswer");
const progressElement = document.getElementById("flashcardProgress");

const showAnswerButton = document.getElementById("showAnswerButton");
const previousButton = document.getElementById("previousFlashcard");
const nextButton = document.getElementById("nextFlashcard");

function displayFlashcard() {

    const card = flashcards[currentFlashcard];

    skillElement.textContent = card.skill;
    questionElement.textContent = card.question;

    answerElement.textContent = answerVisible
        ? card.answer
        : "";

    showAnswerButton.style.display = answerVisible
        ? "none"
        : "inline-block";

    progressElement.textContent =
        `${currentFlashcard + 1} / ${flashcards.length}`;

    previousButton.disabled = currentFlashcard === 0;
    nextButton.disabled =
        currentFlashcard === flashcards.length - 1;
}

showAnswerButton.addEventListener("click", function () {

    answerVisible = true;

    displayFlashcard();

});

nextButton.addEventListener("click", function () {

    if (currentFlashcard < flashcards.length - 1) {

        currentFlashcard++;

        answerVisible = false;

        displayFlashcard();
    }

});

previousButton.addEventListener("click", function () {

    if (currentFlashcard > 0) {

        currentFlashcard--;

        answerVisible = false;

        displayFlashcard();
    }

});

displayFlashcard();

