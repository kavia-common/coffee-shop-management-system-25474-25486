/* Generated for screen 442:3 About Me */

/**
 * PUBLIC_INTERFACE
 * initAboutMeScreen initializes small runtime adjustments for pixel-precise rendering
 * and basic accessibility enhancements without altering layout measurements.
 */
function initAboutMeScreen() {
  /** Ensure the page renders at the Figma frame size to maintain pixel-accuracy. */
  try {
    document.documentElement.style.width = "1333px";
    document.documentElement.style.minWidth = "1333px";
    document.documentElement.style.overflowX = "auto";
  } catch (e) {
    // no-op
  }

  /** Add focus outline for keyboard users on actionable elements. */
  const addFocusStyle = () => {
    const style = document.createElement("style");
    style.setAttribute("data-about-me-focus", "true");
    style.textContent = `
      a:focus, button:focus {
        outline: 2px solid #2563EB;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  };
  addFocusStyle();

  /** Retina-safe image rendering hint */
  document.querySelectorAll("img").forEach((img) => {
    img.decoding = "async";
    img.loading = "eager";
  });

  // Simple console log for debugging in CI
  // eslint-disable-next-line no-console
  console.log("About Me screen (442:3) initialized");
}

// PUBLIC_INTERFACE
document.addEventListener("DOMContentLoaded", initAboutMeScreen);
