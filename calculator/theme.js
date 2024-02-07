function switchTheme(themeNumber) {
  // Themes are "dark", "light", and "barbie".

  const root = document.querySelector(":root");

  if (themeNumber === 1) {
    root.style.setProperty("--primary-bg-color", "#3d4662");
    root.style.setProperty("--output-bg-color", "#132d33");
    root.style.setProperty("--calculator-bg-color", "#1e2d33");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--button-color", "hsl(30, 25%, 89%)");
    root.style.setProperty("--reset-button-color", "#3c5264");
    root.style.setProperty("--equals-button-color", "#32cd32");
    root.style.setProperty("--button-text-color", "#ffffff");
    root.style.setProperty("--attribution-link-color", "#87cefa");
  } else if (themeNumber === 2) {
    root.style.setProperty("--primary-bg-color", "#f2f2f2");
    root.style.setProperty("--output-bg-color", "hsl(0, 0%, 93%)");
    root.style.setProperty("--calculator-bg-color", "hsl(0, 5%, 81%)");
    root.style.setProperty("--text-color", "hsl(60, 10%, 19%)");
    root.style.setProperty("--button-color", "hsl(45, 7%, 89%)");
    root.style.setProperty("--reset-button-color", "hsl(185, 42%, 37%)");
    root.style.setProperty("--equals-button-color", "hsl(25, 98%, 40%)");
    root.style.setProperty("--button-text-color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--attribution-link-color", "hsl(185, 42%, 37%)");
  } else if (themeNumber === 3) {
    root.style.setProperty("--primary-bg-color", "#f067c1");
    root.style.setProperty("--output-bg-color", "#afdefe");
    root.style.setProperty("--calculator-bg-color", "#37ccf9");
    root.style.setProperty("--text-color", "#0a0a0a");
    root.style.setProperty("--button-color", "#ffddff");
    root.style.setProperty("--reset-button-color", "#59127a");
    root.style.setProperty("--equals-button-color", "#ff9ff0");
    root.style.setProperty("--button-text-color", "#ffffff");
    root.style.setProperty("--attribution-link-color", "#ffddff");
  }
}

const slider = document.getElementById("theme-slider");

slider.addEventListener("input", () => {
  const themeNumber = Number(slider.value);
  switchTheme(themeNumber);
});

// Add an event listener to execute when the DOM is fully loaded
// We're doing this because reset causes the first theme to load in css.
document.addEventListener("DOMContentLoaded", function () {
  // Set the value to 1 to represent theme 1
  slider.value = 1;

  // Trigger the input event to apply the theme immediately
  slider.dispatchEvent(new Event("input"));
});
