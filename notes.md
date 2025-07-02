## ✅ Requirements (v1): :
 - Adjustable number of problems.
 - Adjustable number size (e.g., 1 to 4 digits).
 - Comma separators for numbers ≥ 1000.
 - Toggle for show/hide answers (screen only).
 - Printer-friendly layout (1 problem per "window" grid).

### 🧩 Features Explained
Feature	How to Use
Number of Problems	Set how many cards to generate
Digits	Choose 1 to 4 digits (e.g., 9999 + 9999)
Comma separators	Built-in via toLocaleString()
Show/Hide Answers	Toggle button (on screen only, won't print if hidden)
Printer-Friendly	Clean grid layout, no unnecessary UI in print view
Randomized values	New problems each time you click "Generate"

Great additions! Let's break this down into a clean, modular setup:

---

## ✅ Features Requirements Checklist (v2)
 
* ✅ Split files: `index.html`, `styles.css`, `script.js`
* ✅ LocalStorage integration (remembers last settings)
* ✅ Dynamic `<h1>` title (e.g., “3-digit Addition Window Cards”)
* ✅ Font size adapts for screen and A4 print
* ✅ Print-only headers:

  ```
  Name: ____     Score: ____
  Teacher: ____  Date: ____
  ```

---

### 🗂 Folder Structure

```
addition-cards/
├── index.html
├── styles.css
└── script.js
```

### Files:
 -  📄 [index.html](index.html)
 -  🎨 [styles.css](styles.css)
 -  🧠 [script.js](script.js)



---

### ✅ Summary

* A clean **modular app** with saved preferences
* **Dynamic title and font scaling** for digital and print use
* **Print headers** to simulate store-bought work cards
* Easy **customization and scalability** (can expand to subtraction or other operations later)

 
## ✅ Features Requirements Checklist (v3)
 - Header revision: Style the print only header as (evenly spaced across page width) single row specified as:  
   - ```Name: ____ Grade: ____ Date: ____```
 - adjustable font size control next to `print` buttton; lower limit on font size should allow for 10 by 10 grids compactly laid out for a single A4 page.
 - limit number of digits of addends to 6, e.g., 0 to 999,999
  - for each problem, add horizontal row of "=" signs under the addends, e.g., 
   - current layout:
```
   94,978
+  32,375
= 127,353
```
   - revised layout: 
```
   94,978
+  32,375
  =======
= 127,353
```


### 📌 Summary of Today’s Work ( 2025-07-02 Wed Jul 2 )

**1) Done**

* Integrated all four operations (+ − × ÷) with dynamic title updates and operator-specific logic
* Added constraint toggles for "Avoid Carrying" (Addition) and "Avoid Borrowing" (Subtraction)
* Reorganized control layout into two clean rows: inputs on top, action buttons below
* Visual ⚠ markers show when constraints are violated
* Styles and layout tweaked to preserve A4 compatibility and perfect overlay alignment

**2) In Progress**

* Fine-tuning constraint checkbox visibility to minimize UI layout shift
* Improving division problem generator to avoid trivial or redundant equations

**3) Blockers**

* None currently, but upcoming: constraint tuning for more realistic math problems (e.g., avoid “99 ÷ 1” and “same ÷ same” patterns)