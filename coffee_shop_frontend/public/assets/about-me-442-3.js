/* Generated for screen 442:3 About Me */

/**
 * PUBLIC_INTERFACE
 * initAboutMeScreen initializes small runtime adjustments for pixel-precise rendering
 * and basic accessibility enhancements without altering layout measurements.
 * It safely scopes to the About Me root container when present.
 */
function initAboutMeScreen() {
  const root = document.getElementById("about-me-442-3-root") || document;

  // Keep sizing within screen container only
  try {
    const screen = document.getElementById("screen-442-3");
    if (screen) {
      screen.style.width = "1333px";
      screen.style.height = "998px";
      screen.style.overflow = "hidden";
    }
  } catch (e) {
    /* no-op */
  }

  // Add focus outline for keyboard users on actionable elements within root
  const addFocusStyle = () => {
    const style = document.createElement("style");
    style.setAttribute("data-about-me-focus", "true");
    style.textContent = `
      #about-me-442-3-root a:focus, 
      #about-me-442-3-root button:focus {
        outline: 2px solid #2563EB;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  };
  addFocusStyle();

  // Improve image loading hints only for this root
  const imgs = (root.querySelectorAll ? root.querySelectorAll("img") : []);
  imgs.forEach((img) => {
    img.decoding = "async";
    img.loading = "eager";
  });

  // eslint-disable-next-line no-console
  console.log("About Me screen (442:3) initialized");
}

// PUBLIC_INTERFACE
// Expose init on window for React to call after script load; do not auto-run on DOMContentLoaded
window.initAboutMeScreen = window.initAboutMeScreen || initAboutMeScreen;
