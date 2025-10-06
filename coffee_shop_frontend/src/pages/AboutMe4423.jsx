import React, { useEffect, useMemo } from 'react';

/**
 * PUBLIC_INTERFACE
 * AboutMe4423 renders the generated About Me static screen (442:3) inside React.
 * Load the dedicated CSS from /assets on mount and remove it on unmount to avoid global leakage.
 * Image and script paths are resolved via PUBLIC_URL + '/assets/...'.
 * The ?nocss flag is ignored; CSS is enabled by default.
 */
function AboutMe4423() {
  const base = process.env.PUBLIC_URL || '';

  // Build the static markup from the HTML body content only.
  const content = useMemo(() => {
    const html = `
      <main id="screen-442-3" aria-labelledby="headline-title" role="main">
        <div class="stripe" aria-hidden="true"></div>

        <nav class="frame frame-studio-name" aria-label="Breadcrumb">
          <div class="group text-breadcrumb" role="group" aria-label="Breadcrumb path">
            <p class="text typo-97" style="left: 0px; top: 1px; width: 96px; height: 22px;" aria-label="Studio name">Nam Design</p>
            <div class="icon-arrow" role="img" aria-label="arrow right">
              <img src="../assets/figmaimages/figma_image_442_32.png" alt="" />
            </div>
            <p class="text typo-97" style="left: 128px; top: 1px; width: 78px; height: 22px;" aria-current="page">About Me</p>
          </div>
          <p class="text typo-97 at-right" style="width: 104px; height: 22px;">@namdesign</p>
        </nav>

        <section class="frame frame-headline-logo" aria-labelledby="headline-title">
          <div class="frame frame-headline-text">
            <h1 id="headline-title" class="text typo-103" style="left: 0px; top: 0px; width: 178px; height: 60px;">About Me</h1>
            <p class="text typo-100" style="left: 0px; top: 68px; width: 710px; height: 81px;">
              Hi, my name is B, and I am a product designer at NAM Design. I have been working in this field for more than four years, and I hope that my resources can help you with your design process. Cheers!
            </p>
          </div>
          <figure class="logo-rectangle" role="img" aria-label="Logo NAM Design">
            <img src="../assets/figmaimages/figma_image_442_27.png" alt="Logo NAM Design" />
          </figure>
        </section>

        <section class="frame frame-support-us" aria-labelledby="support-title">
          <div class="frame frame-support-text">
            <h2 id="support-title" class="text typo-99" style="left: 0px; top: 0px; width: 235px; height: 31px;">Ways to Support Me</h2>
            <p class="text typo-100" style="left: 0px; top: 47px; width: 710px; height: 27px;">
              If you appreciate my work, please consider supporting me below.
            </p>
          </div>

          <div class="frame frame-support-bmac" role="group" aria-labelledby="bmac-title">
            <div class="group bmac-logo" aria-hidden="false" role="img" aria-label="Buy Me A Coffee logo">
              <div class="bmac-logo-bg"></div>
              <img class="bmac-logo-icon" src="../assets/figmaimages/figma_image_442_17.png" alt="Coffee cup icon" />
            </div>

            <div class="frame bmac-detail">
              <div class="frame bmac-text-row">
                <h3 id="bmac-title" class="text typo-101" style="left: 0px; top: 0px; width: 183px; height: 29px;">Buy Me A Coffee</h3>
                <span class="text typo-101" aria-hidden="true" style="left: 187px; top: 2.5px; width: 24px; height: 24px;">👇</span>
              </div>
              <p class="text typo-102" style="left: 0px; top: 53px; width: 462px; height: 24px;">
                <a href="https://www.buymeacoffee.com/namdesign" target="_blank" rel="noopener noreferrer">
                  https://www.buymeacoffee.com/namdesign
                </a>
              </p>
            </div>
          </div>
        </section>

        <figure class="frame frame-image" role="img" aria-label="Saly 39 illustration">
          <img src="../assets/figmaimages/figma_image_442_9.png" alt="Saly 39" />
        </figure>

        <footer class="frame frame-created-by" aria-label="Credits">
          <p class="text typo-97">Create with</p>
          <span class="text typo-98" aria-hidden="false" role="img">🖤</span>
          <p class="text typo-97">by NAM Design</p>
        </footer>
      </main>
    `;
    // Ensure all image paths point to PUBLIC_URL + '/assets/...'
    return html.replaceAll('../assets/', `${base}/assets/`);
  }, [base]);

  useEffect(() => {
    // Inject page-specific stylesheet on mount
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${base}/assets/about-me-442-3.css`;
    link.setAttribute('data-about-me-css', 'true');
    link.crossOrigin = 'anonymous';
    link.onload = () => {
      // eslint-disable-next-line no-console
      console.info('About Me CSS loaded:', link.href);
    };
    link.onerror = () => {
      // eslint-disable-next-line no-console
      console.error(`Failed to load About Me CSS from ${link.href}. Ensure the file exists in public/assets and the path is correct.`);
      // Remove the bad link tag so it doesn't block subsequent loads
      if (link.parentNode) link.parentNode.removeChild(link);
    };
    document.head.appendChild(link);

    // Load the JS for runtime enhancements
    const script = document.createElement('script');
    script.src = `${base}/assets/about-me-442-3.js`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-about-me-js', 'true');

    // If the server responds with HTML (index.html), the browser fires onerror.
    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.error(`Failed to load About Me script from ${script.src}. Verify that the file exists under /public/assets and that the path is correct. The request may have returned HTML instead of JS.`);
      // Make sure we don't keep a broken tag around
      if (script.parentNode) script.parentNode.removeChild(script);
    };

    script.onload = () => {
      try {
        // If the script double-binds or relies on full page DOM, wrap safely.
        if (typeof window.initAboutMeScreen === 'function') {
          window.initAboutMeScreen();
        } else {
          // eslint-disable-next-line no-console
          console.warn('initAboutMeScreen() not found on window; JS file may have changed or is unnecessary.');
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('About Me JS initialization error:', e);
      }
    };

    document.body.appendChild(script);

    // Cleanup: remove the CSS and script to avoid global leakage
    return () => {
      const oldLink = document.querySelector('link[data-about-me-css="true"]');
      if (oldLink && oldLink.parentNode) {
        oldLink.parentNode.removeChild(oldLink);
      }
      const scriptEl = document.querySelector('script[data-about-me-js="true"]');
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
      const focusStyle = document.querySelector('style[data-about-me-focus="true"]');
      if (focusStyle && focusStyle.parentNode) {
        focusStyle.parentNode.removeChild(focusStyle);
      }
    };
  }, [base]);

  return (
    <div id="about-me-442-3-root" dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export default AboutMe4423;
