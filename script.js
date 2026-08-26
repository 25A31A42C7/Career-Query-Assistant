/* =========================
   SCROLL TO ASSISTANT
========================= */

function scrollToAssistant() {

    document.getElementById("assistant").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   CAREER QUESTION
========================= */

function askCareerQuestion() {

    const question = document.getElementById("careerQuestion");

    const loading = document.getElementById("loading");

    const response = document.getElementById("assistantResponse");


    if (question.value.trim() === "") {

        response.classList.remove("hidden");

        response.innerHTML =
            "Please enter a career question first.";

        return;
    }


    loading.classList.remove("hidden");

    response.classList.add("hidden");


    setTimeout(function () {

        loading.classList.add("hidden");

        response.classList.remove("hidden");

        response.innerHTML = `
            <strong>Career Assistant:</strong>

            <p>
                Based on your question, a good career path
                could include learning Python, SQL, Machine
                Learning, cloud technologies and building
                practical projects.
            </p>

            <p>
                You can also explore AI/ML Engineer,
                Data Analyst and Software Developer roles.
            </p>
        `;

    }, 1200);

}


/* =========================
   RESUME FILE
========================= */

function showFileName() {

    const fileInput = document.getElementById("resumeFile");

    const fileName = document.getElementById("fileName");


    if (fileInput.files.length > 0) {

        fileName.textContent =
            "Selected: " + fileInput.files[0].name;

    } else {

        fileName.textContent = "";

    }

}


/* =========================
   RESUME ANALYSIS
========================= */

function analyzeResume() {

    const resumeFile =
        document.getElementById("resumeFile");

    const jobDescription =
        document.getElementById("jobDescription");

    const matchResult =
        document.getElementById("matchResult");


    if (resumeFile.files.length === 0) {

        alert("Please upload your resume.");

        return;
    }


    if (jobDescription.value.trim() === "") {

        alert("Please enter a job description.");

        return;
    }


    matchResult.classList.remove("hidden");


    matchResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}