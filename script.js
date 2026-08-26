// ========================================
// CAREER QUERY ASSISTANT
// Frontend Mock Logic
// ========================================


// PAGE NAVIGATION

const navItems = document.querySelectorAll(".nav-item[data-page]");
const pages = document.querySelectorAll(".page");

function openPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    navItems.forEach(item => {
        item.classList.remove("active");

        if (item.dataset.page === pageId) {
            item.classList.add("active");
        }
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// SIDEBAR CLICK

navItems.forEach(item => {

    item.addEventListener("click", () => {

        openPage(item.dataset.page);

    });

});


// DASHBOARD ACTION CARDS

const actionButtons = document.querySelectorAll("[data-open]");

actionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.open;

        openPage(page);

    });

});


// CAREER QUERY EXAMPLES

const exampleButtons = document.querySelectorAll(".example-btn");

exampleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const question = document.getElementById("careerQuestion");

        question.value = button.textContent;

        question.focus();

    });

});


// CAREER QUERY

const askCareer = document.getElementById("askCareer");

if (askCareer) {

    askCareer.addEventListener("click", () => {

        const question =
            document.getElementById("careerQuestion").value.trim();

        if (!question) {

            alert("Please enter a career question.");

            return;
        }

        askCareer.textContent = "Analyzing...";

        setTimeout(() => {

            askCareer.textContent = "Ask Career Assistant";

            alert(
                "Mock Career Assistant Result:\n\n" +
                "Recommended Role: AI/ML Engineer\n" +
                "Match: 91%\n\n" +
                "Skills: Python • Machine Learning • SQL"
            );

        }, 800);

    });

}


// JOB RESEARCH

const analyzeJob = document.getElementById("analyzeJob");

if (analyzeJob) {

    analyzeJob.addEventListener("click", () => {

        const title =
            document.getElementById("jobTitle").value.trim();

        if (!title) {

            alert("Please enter a job title.");

            return;
        }

        analyzeJob.textContent = "Analyzing...";

        setTimeout(() => {

            analyzeJob.textContent = "Analyze Job";

            alert(
                "Job analysis completed using mock data.\n\n" +
                "Required: Python, Machine Learning, SQL\n" +
                "Preferred: Docker, AWS"
            );

        }, 800);

    });

}


// RESUME FILE UPLOAD

const resumeFile = document.getElementById("resumeFile");

if (resumeFile) {

    resumeFile.addEventListener("change", () => {

        const fileName =
            document.getElementById("fileName");

        if (resumeFile.files.length > 0) {

            const file = resumeFile.files[0];

            fileName.textContent =
                "Selected: " + file.name;

        }

    });

}


// RESUME ANALYSIS

const analyzeResume =
    document.getElementById("analyzeResume");

if (analyzeResume) {

    analyzeResume.addEventListener("click", () => {

        const file =
            document.getElementById("resumeFile").files[0];

        const job =
            document.getElementById("resumeJob").value.trim();

        if (!file) {

            alert("Please upload your resume PDF.");

            return;
        }

        if (!job) {

            alert("Please paste the job description.");

            return;
        }

        analyzeResume.textContent = "Analyzing Resume...";

        setTimeout(() => {

            analyzeResume.textContent = "Analyze Match";

            alert(
                "Resume analysis completed!\n\n" +
                "Mock Match Score: 87%\n\n" +
                "Strong Matches: Python, SQL, ML, React\n" +
                "Underrepresented: FastAPI, REST APIs\n" +
                "Missing: Docker"
            );

        }, 1200);

    });

}


// GITHUB PROJECT ANALYSIS

const analyzeProject =
    document.getElementById("analyzeProject");

if (analyzeProject) {

    analyzeProject.addEventListener("click", () => {

        const githubUrl =
            document.getElementById("githubUrl").value.trim();

        if (!githubUrl) {

            alert("Please enter a GitHub repository URL.");

            return;
        }

        analyzeProject.textContent = "Analyzing Project...";

        setTimeout(() => {

            analyzeProject.textContent = "Analyze Project";

            alert(
                "Project analysis completed using mock data.\n\n" +
                "Detected Technologies:\n" +
                "Python, React, Firebase, FastAPI, REST API"
            );

        }, 1200);

    });

}


// RESUME GENERATOR

const generateResume =
    document.getElementById("generateResume");

if (generateResume) {

    generateResume.addEventListener("click", () => {

        generateResume.textContent =
            "Generating...";

        setTimeout(() => {

            generateResume.textContent =
                "Generate Tailored Resume";

            alert(
                "Tailored resume generated using mock data."
            );

        }, 1000);

    });

}


// DOWNLOAD PDF PLACEHOLDER

const downloadResume =
    document.getElementById("downloadResume");

if (downloadResume) {

    downloadResume.addEventListener("click", () => {

        alert(
            "PDF generation will be connected to the backend later."
        );

    });

}
