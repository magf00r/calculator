const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".toggle");
const themeToggleLightText = document.querySelector(".text-light");
const themeToggleDarkText = document.querySelector(".text-dark");
const calculator = document.querySelector(".calculator");

let isDark = true;

function updateTextBasedOnTheme() {
  if (isDark) {
    themeToggleLightText.textContent = "Switch to Light Mode";
    themeToggleLightText.style.color = "white";

    // Clear the text content for the dark theme
    themeToggleDarkText.textContent = "";
  } else {
    themeToggleDarkText.textContent = "Switch to Dark Mode";
    themeToggleDarkText.style.color = "#071115";

    // Clear the text content for the light theme
    themeToggleLightText.textContent = "";
  }
}

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

themeToggleBtn.addEventListener("click", () => {
  themeToggleBtn.classList.toggle("on");
  isDark = !isDark; // Update the isDark variable
  updateTextBasedOnTheme();
});

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  // No need to update isDark here, it's already updated in the first event listener
  updateTextBasedOnTheme();
};

// Initial call to set the text content based on the initial theme
updateTextBasedOnTheme();
