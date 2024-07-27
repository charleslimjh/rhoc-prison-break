document.addEventListener("DOMContentLoaded", () => {
  const str = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789♣♦♥♠■●▲";
  var options = str.split("");
  const dropdowns = document.querySelectorAll(".form-select");
  options.push("Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink");

  dropdowns.forEach((dropdown) => {
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.text = option;
      dropdown.appendChild(optionElement);
    });
  });

  const expectedValues = {
    dropdown1: "D",
    dropdown2: "U",
    dropdown3: "C",
    dropdown4: "K",
    dropdown5: "2",
    dropdown6: "3",
    dropdown7: "8",
    dropdown8: "1",
    dropdown9: "♦",
    dropdown10: "♥",
    dropdown11: "●",
    dropdown12: "■",
    dropdown13: "Red",
    dropdown14: "Blue",
    dropdown15: "Green",
    dropdown16: "Purple",
  };

  /*
  if you're seeing this source code, boo to you. cheater.

  but also, its my fault i got lazy and didnt bother to 
  code this website properly so????? kudos to you??

  quote 'IUSEDDEVELOPERTOOLS' to @rei_charl for extra 300 points for your OG.

  and maybe a free milo. :]
  */

  const form = document.getElementById("dropdownForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let matchCount = 0;

    for (const [dropdownId, expectedValue] of Object.entries(expectedValues)) {
      const dropdown = document.getElementById(dropdownId);
      if (dropdown.value === expectedValue) {
        matchCount++;
      }
    }

    const resultMessage = `Correct: ${matchCount} out of 16.`;
    if (matchCount === 16) {
      alert(
        `${resultMessage}\nQuote "Vivaldi Violin Concerto in E major, RV 269 Movement 2 Bar 32" to the game master to get out of the prison!`
      );
    } else {
      alert(resultMessage);
    }
  });
});
