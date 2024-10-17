const form = document.getElementById('report-card-form');
const sumReportButton = document.getElementById('sum-report');
const averageReportButton = document.getElementById('average-report');
const generateReportButton = document.getElementById('generate-report');
const clearReportButton = document.getElementById('clear-report');
const reportCard = document.getElementById('report-card');
const studentNameDisplay = document.getElementById('student-name-display');
const reportCardTable = document.getElementById('report-card-table');
const totalMarksDisplay = document.getElementById('total-marks-display');
const averageMarksDisplay = document.getElementById('average-marks-display');
const overallGradeDisplay = document.getElementById('overall-grade-display');
const sumDisplay = document.getElementById('sum-display');
const averageDisplay = document.getElementById('average-display');

sumReportButton.addEventListener('click', calculateSum);
averageReportButton.addEventListener('click', calculateAverage);
generateReportButton.addEventListener('click', generateReport);
clearReportButton.addEventListener('click', clearReport);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function calculateSum() {
    const subject1 = parseInt(document.getElementById('subject-1').value) || 0;
    const subject2 = parseInt(document.getElementById('subject-2').value) || 0;
    const subject3 = parseInt(document.getElementById('subject-3').value) || 0;
    const subject4 = parseInt(document.getElementById('subject-4').value) || 0;
    const subject5 = parseInt(document.getElementById('subject-5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    sumDisplay.style.display = 'block';
    sumDisplay.innerText = `Total Marks: ${totalMarks}`;
}


function calculateAverage() {
    const subject1 = parseInt(document.getElementById('subject-1').value) || 0;
    const subject2 = parseInt(document.getElementById('subject-2').value) || 0;
    const subject3 = parseInt(document.getElementById('subject-3').value) || 0;
    const subject4 = parseInt(document.getElementById('subject-4').value) || 0;
    const subject5 = parseInt(document.getElementById('subject-5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    averageDisplay.style.display = 'block';
    averageDisplay.innerText = `Average Marks: ${averageMarks.toFixed(2)}`;
}

function generateReport() {
    const studentName = document.getElementById('student-name').value;
    const subject1 = parseInt(document.getElementById('subject-1').value) || 0;
    const subject2 = parseInt(document.getElementById('subject-2').value) || 0;
    const subject3 = parseInt(document.getElementById('subject-3').value) || 0;
    const subject4 = parseInt(document.getElementById('subject-4').value) || 0;
    const subject5 = parseInt(document.getElementById('subject-5').value) || 0;

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;

    let overallGrade;
    if (averageMarks >= 90) {
        overallGrade = 'A';
    } else if (averageMarks >= 80) {
        overallGrade = 'B';
    } else if (averageMarks >= 70) {
        overallGrade = 'C';
    } else if (averageMarks >= 60) {
        overallGrade = 'D';
    } else {
        overallGrade = 'F';
    }

    studentNameDisplay.innerText = `Student Name: ${studentName}`;
    reportCardTable.innerHTML = `
        <tr>
            <td>Subject 1</td>
            <td>${subject1}</td>
            <td>${getGrade(subject1)}</td>
        </tr>
        <tr>
            <td>Subject 2</td>
            <td>${subject2}</td>
            <td>${getGrade(subject2)}</td>
        </tr>
        <tr>
            <td>Subject 3</td>
            <td>${subject3}</td>
            <td>${getGrade(subject3)}</td>
        </tr>
        <tr>
            <td>Subject 4</td>
            <td>${subject4}</td>
            <td>${getGrade(subject4)}</td>
        </tr>
        <tr>
            <td>Subject 5</td>
            <td>${subject5}</td>
            <td>${getGrade(subject5)}</td>
        </tr>
    `;
    averageMarksDisplay.innerText = `Average Marks: ${averageMarks.toFixed(2)}`;
    overallGradeDisplay.innerText = `Overall Grade: ${overallGrade}`;

    reportCard.style.display = 'block'; 
}

function getGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function clearReport() {
    document.getElementById('student-name').value = '';
    document.getElementById('subject-1').value = '';
    document.getElementById('subject-2').value = '';
    document.getElementById('subject-3').value = '';
    document.getElementById('subject-4').value = '';
    document.getElementById('subject-5').value = '';

    reportCard.style.display = 'none';
    sumDisplay.style.display = 'none';
    averageDisplay.style.display = 'none';
}

