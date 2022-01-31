let wp = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
let founds = [0, 0, 0];
let x = [];
let o = [];
let counter = 0;
let cells = document.querySelectorAll(".cells");
let cellitems = [];
let c = false;
let xs = 0;
let n = 0;
let won = 0;
let xwincounter = 0;
let xlosecounter = 0;
let owincounter = 0;
let olosecounter = 0;
let trychecker = 0;
function reseting() {
  x = [];
  o = [];
  founds = [];
  console.log(x);
  console.log(o);
  console.log(founds);
  won = 0;
  cells.forEach((e) => {
    e.querySelector("h1").classList.remove("dblock");
    e.classList.remove("blocked");
  });
}

cells.forEach((e) => {
  e.classList.add(`${n}`);
  n += 1;
  cellitems.push(e);

  e.onclick = () => {
    console.log("clicked");

    if (won === 0) {
      e.querySelector("h1").classList.add("dblock");
      if (c === false) {
        if (!e.classList.contains("blocked")) {
          e.querySelector("h1").innerHTML = "X";
          e.classList.add("blocked");

          c = true;
          x.push(cellitems.indexOf(e));
          for (let b = 0; b < wp.length; b++) {
            counter = 0;
            for (let i = 0; i < x.length; i++) {
              for (let j = 0; j < wp[b].length; j++) {
                if (x[i] === wp[b][j]) {
                  founds[counter] = 1;
                  counter += 1;
                }
              }
            }

            let s = 0;
            for (let c = 0; c < founds.length; c++) {
              s += founds[c];
            }
            if (s === 3) {
              won = 1;
              break;
            }
          }
        }
        if (won === 1) {
          document.querySelector(".x-o").innerHTML = "X";

          console.log("o", o);
          console.log("x", x);
          document.querySelector(".xwins").innerHTML = xwincounter += 1;
          document.querySelector(".oloses").innerHTML = olosecounter += 1;
          dopac();
        }
        trychecker = 0;
        cells.forEach((e) => {
          if (e.classList.contains("blocked")) {
            trychecker += 1;
          }
        });
        if (trychecker === 9 && won === 0) {
          document.querySelector(".x-o").innerHTML = "No one";
          dopac();
        }
      } else {
        if (!e.classList.contains("blocked")) {
          e.querySelector("h1").innerHTML = "O";
          e.classList.add("blocked");
          c = false;
          o.push(cellitems.indexOf(e));
          for (let b = 0; b < wp.length; b++) {
            counter = 0;
            for (let i = 0; i < o.length; i++) {
              for (let j = 0; j < wp[b].length; j++) {
                if (o[i] === wp[b][j]) {
                  founds[counter] = 1;
                  counter += 1;
                }
              }
            }

            let s = 0;
            for (let c = 0; c < founds.length; c++) {
              s += founds[c];
            }
            if (s === 3) {
              won = 2;
              break;
            }
          }
        }
        if (won === 2) {
          document.querySelector(".x-o").innerHTML = "O";
          dopac();

          document.querySelector(".owins").innerHTML = owincounter += 1;
          document.querySelector(".xloses").innerHTML = xlosecounter += 1;
        }
        trychecker = 0;
        cells.forEach((e) => {
          if (e.classList.contains("blocked")) {
            trychecker += 1;
          }
        });
        if (trychecker === 9 && won === 0) {
          document.querySelector(".x-o").innerHTML = "No one";

          dopac();
        }
      }
    }
  };
});
document.querySelector(".reset").onclick = () => {
  reseting();
};
function dopac() {
  document.querySelector(".win_section_background").classList.add("dopacity");
}
document.querySelector(".ok").onclick = () => {
  document
    .querySelector(".win_section_background")
    .classList.remove("dopacity");
};
