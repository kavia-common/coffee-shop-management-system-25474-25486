(function () {
  "use strict";

  // PUBLIC_INTERFACE
  function initImages417290() {
    var root = document.getElementById("images-417-290-root");
    var canvas = document.getElementById("screen-417-290");
    if (!canvas) return;

    // Enforce exact canvas size from JSON and keep overflow hidden for pixel-precision
    try {
      canvas.style.width = "1333px";
      canvas.style.height = "990px";
      canvas.style.overflow = "hidden";
    } catch (e) {
      // no-op
    }

    // Improve image loading hints within this root only
    if (root && root.querySelectorAll) {
      var imgs = root.querySelectorAll("img");
      imgs.forEach(function (img) {
        img.decoding = "async";
        img.loading = "eager";
      });
    }

    // Add focus outline for keyboard users scoped to this screen
    var style = document.createElement("style");
    style.setAttribute("data-images-417-290-focus", "true");
    style.textContent = [
      "#images-417-290-root a:focus,",
      "#images-417-290-root button:focus {",
      "  outline: 2px solid #2563EB;",
      "  outline-offset: 2px;",
      "}"
    ].join("\n");
    document.head.appendChild(style);

    // eslint-disable-next-line no-console
    console.log("Images screen (417:290) initialized");
  }

  // PUBLIC_INTERFACE
  // Expose init without auto-running to be SPA-safe
  window.initImages417290 = window.initImages417290 || initImages417290;
})();
