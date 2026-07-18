# PIPTR — 4th Semester Examination Result Portal

A static, responsive university result portal built with plain HTML, CSS, and JavaScript for **Parul Institute of Physiotherapy and Research (PIPTR)**.

## Files

| File         | Purpose                                              |
|--------------|-------------------------------------------------------|
| `index.html` | Page structure — header, search form, result card, footer |
| `style.css`  | Official blue & white theme, responsive layout, print styles |
| `script.js`  | Enrollment search logic, result rendering, print/PDF actions |
| `README.md`  | This file |

## Features

- **Official blue & white university theme** with a navy/gold accent header strip
- **Header** displaying "PIPTR — Parul Institute of Physiotherapy and Research"
- **Title band** — "4th Semester Examination Result", declared **15/07/2026**
- **Search by Enrollment Number** with inline validation and error handling
- **Result card** showing:
  - Logo placeholder (circular badge, top-left)
  - Student photo placeholder (top-right)
  - Student details (enrollment no., name, course, semester, result status)
  - Subject-wise marks table with per-subject Pass/Fail
  - Total marks, percentage, and final result summary
  - QR code placeholder for verification
  - Signature block for the Controller of Examinations
  - "Computer Generated Provisional Result" disclaimer footer
- **Print Result** button — opens the browser print dialog with a clean, print-only layout (search UI and buttons are hidden automatically)
- **Download PDF** button — reuses the native browser print-to-PDF flow (no external libraries, works fully offline)
- **Fully responsive** — adapts from desktop down to small mobile screens

## Included demo record

| Field | Value |
|---|---|
| Enrollment Number | `2407511020078` |
| Student Name | Salekar Sakshi Santosh |
| Course | Bachelor of Physiotherapy |
| Semester | 4 |
| Total Marks | 256 / 360 |
| Percentage | 71.56% |
| Result | PASS |

Subject-wise marks (Therapeutic Exercise, Pharmacology, Public Health, Biomechanics and Kinesiology, Electrotherapy, Therapeutic Exercise Practical, Electrotherapy Practical) are all preloaded and searchable via the enrollment number above.

## How to use

1. Open `index.html` in any modern web browser (double-click the file — no server or build step required).
2. Enter the enrollment number `2407511020078` (or click the sample link) and click **Search Result**.
3. Use **Print Result** to print directly, or **Download PDF** and choose "Save as PDF" as the print destination.

## Adding more students

Open `script.js` and add a new entry to the `STUDENT_DB` object, following the existing format:

```js
"YOUR_ENROLLMENT_NUMBER": {
  enrollment: "YOUR_ENROLLMENT_NUMBER",
  name: "Student Name",
  course: "Course Name",
  semester: "Nth Semester",
  resultDate: "DD/MM/YYYY",
  subjects: [
    { name: "Subject Name", obtained: 0, max: 0, result: "Pass" }
    // ...more subjects
  ],
  totalObtained: 0,
  totalMax: 0,
  percentage: "0.00%",
  finalResult: "PASS"
}
```

## Replacing placeholders

- **University logo**: replace `.logo-placeholder` / `.card-logo-placeholder` `<div>` in `index.html` with an `<img>` tag pointing to the official crest.
- **Student photo**: replace `.card-photo-placeholder` with an `<img>` tag.
- **QR code**: replace `.qr-placeholder` with a generated QR `<img>` (e.g., linking to a verification URL containing the enrollment number).

## Notes

- This is a **front-end demo only** — student data lives in `script.js` and is not connected to a live database or backend.
- The result is explicitly labeled a **Computer Generated Provisional Result**, consistent with standard university result-portal practice.
