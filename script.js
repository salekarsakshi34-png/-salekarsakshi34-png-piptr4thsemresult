/* ==========================================================
   PIPTR RESULT PORTAL — script.js
   Handles: enrollment search, result rendering,
   print action, and PDF download action.
   ========================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     STUDENT DATABASE
     Add more student records here in the same format to
     extend the portal to additional enrollment numbers.
  ---------------------------------------------------------- */
  const STUDENT_DB = {
    "2407511020078": {
      enrollment: "2407511020078",
      name: "Salekar Sakshi Santosh",
      course: "Bachelor of Physiotherapy",
      semester: "4th Semester",
      resultDate: "15/07/2026",
      subjects: [
        { name: "Therapeutic Exercise",              obtained: 41, max: 60, result: "Pass" },
        { name: "Pharmacology",                       obtained: 18, max: 30, result: "Pass" },
        { name: "Public Health",                      obtained: 22, max: 30, result: "Pass" },
        { name: "Biomechanics and Kinesiology",       obtained: 50, max: 60, result: "Pass" },
        { name: "Electrotherapy",                     obtained: 38, max: 60, result: "Pass" },
        { name: "Therapeutic Exercise Practical",     obtained: 43, max: 60, result: "Pass" },
        { name: "Electrotherapy Practical",           obtained: 44, max: 60, result: "Pass" }
      ],
      totalObtained: 256,
      totalMax: 360,
      percentage: "71.56%",
      finalResult: "PASS"
    }
  };

  /* ----------------------------------------------------------
     DOM REFERENCES
  ---------------------------------------------------------- */
  const searchForm     = document.getElementById("searchForm");
  const enrollmentInput= document.getElementById("enrollmentInput");
  const errorMsg        = document.getElementById("errorMsg");
  const fillSampleBtn   = document.getElementById("fillSample");

  const searchPanel = document.getElementById("searchPanel");
  const resultPanel = document.getElementById("resultPanel");

  const printBtn     = document.getElementById("printBtn");
  const downloadBtn  = document.getElementById("downloadBtn");
  const newSearchBtn = document.getElementById("newSearchBtn");

  const marksTableBody = document.querySelector("#marksTable tbody");

  /* ----------------------------------------------------------
     SEARCH HANDLER
  ---------------------------------------------------------- */
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMsg.textContent = "";

    const query = enrollmentInput.value.trim();

    if (!query) {
      errorMsg.textContent = "Please enter your enrollment number.";
      return;
    }

    const record = STUDENT_DB[query];

    if (!record) {
      errorMsg.textContent =
        "No result found for enrollment number \"" + query + "\". Please check and try again.";
      resultPanel.hidden = true;
      return;
    }

    renderResult(record);
    searchPanel.hidden = true;
    resultPanel.hidden = false;
    resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  fillSampleBtn.addEventListener("click", function () {
    enrollmentInput.value = "2407511020078";
    enrollmentInput.focus();
  });

  newSearchBtn.addEventListener("click", function () {
    resultPanel.hidden = true;
    searchPanel.hidden = false;
    enrollmentInput.value = "";
    errorMsg.textContent = "";
    searchPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ----------------------------------------------------------
     RENDER RESULT INTO THE CARD
  ---------------------------------------------------------- */
  function renderResult(record) {
    document.getElementById("outEnrollment").textContent = record.enrollment;
    document.getElementById("outName").textContent = record.name;
    document.getElementById("outCourse").textContent = record.course;
    document.getElementById("outSemester").textContent = record.semester;

    const statusEl = document.getElementById("outStatus");
    const finalResultEl = document.getElementById("outFinalResult");
    statusEl.textContent = record.finalResult;
    finalResultEl.textContent = record.finalResult;

    const passClass = record.finalResult === "PASS" ? "status-pass" : "status-fail";
    statusEl.className = passClass;
    finalResultEl.className = passClass;

    document.getElementById("outTotal").textContent =
      record.totalObtained + " / " + record.totalMax;
    document.getElementById("outPercentage").textContent = record.percentage;

    marksTableBody.innerHTML = "";
    record.subjects.forEach(function (subj, index) {
      const tr = document.createElement("tr");

      const resultClass = subj.result.toLowerCase() === "pass" ? "result-pass" : "result-fail";

      tr.innerHTML =
        "<td>" + (index + 1) + "</td>" +
        "<td>" + subj.name + "</td>" +
        "<td>" + subj.obtained + "</td>" +
        "<td>" + subj.max + "</td>" +
        "<td class=\"" + resultClass + "\">" + subj.result + "</td>";

      marksTableBody.appendChild(tr);
    });
  }

  /* ----------------------------------------------------------
     PRINT ACTION
  ---------------------------------------------------------- */
  printBtn.addEventListener("click", function () {
    window.print();
  });

  /* ----------------------------------------------------------
     DOWNLOAD PDF ACTION
     Uses the browser's native print-to-PDF flow, which
     requires no external libraries or network access and
     works fully offline. We open the print dialog and guide
     the user to choose "Save as PDF" as the destination.
  ---------------------------------------------------------- */
  downloadBtn.addEventListener("click", function () {
    alert(
      "In the Print dialog that opens next, set \"Destination\" to " +
      "\"Save as PDF\" and click Save to download your result."
    );
    window.print();
  });

})();
