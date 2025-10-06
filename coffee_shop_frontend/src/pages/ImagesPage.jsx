import React, { useEffect, useMemo } from 'react';

/**
 * PUBLIC_INTERFACE
 * ImagesPage renders the "Images" screen (417:290) within the React app at /images.
 * It injects the page-scoped stylesheet and JS from PUBLIC_URL + '/assets/images-417-290.*'
 * and renders only the inner content (no html/head/body). All image src paths are normalized
 * to absolute PUBLIC_URL + '/assets/figmaimages/...'.
 */
function ImagesPage() {
  const base = process.env.PUBLIC_URL || '';

  // Build the static markup using only the inner content from assets/images-417-290.html
  // and normalize asset paths to be absolute using PUBLIC_URL.
  const content = useMemo(() => {
    // This is the trimmed inner content of the screen root (no html/head/body/link/script tags)
    const html = `
      <main id="screen-417-290" role="main" aria-label="Images screen canvas">
        <div class="stripe" aria-hidden="true"></div>

        <nav class="studio-name" aria-label="Breadcrumb">
          <div class="studio-left" role="group" aria-label="Studio path">
            <p class="typo-54 studio-text" style="left: 0px; top: 1px; width: 96px; height: 22px;">Nam Design</p>
            <figure class="arrow" role="img" aria-label="Arrow right">
              <img
                class="arrow-img"
                src="/assets/figmaimages/figma_image_444_14.png"
                alt="Arrow right"
                decoding="async"
                loading="eager"
              />
            </figure>
            <p class="typo-54 studio-text" style="left: 128px; top: 1px; width: 114px; height: 22px;">Assets Images</p>
          </div>
          <p class="typo-54 handle">@namdesign</p>
        </nav>

        <section class="number" aria-label="Section number">
          <h2 class="typo-52 number-big" aria-hidden="false">01</h2>
          <p class="typo-53 number-label" aria-current="page">Images</p>
        </section>

        <header class="title" aria-labelledby="title-label">
          <h3 id="title-label" class="typo-51 title-label">Image on Design</h3>
          <div class="title-line" aria-hidden="true">
            <div class="line-left"></div>
            <div class="line-right"></div>
          </div>
        </header>

        <section class="image-grid" aria-label="Coffee images grid">
          <figure class="img img-1" role="img" aria-label="Coffee image 1">
            <img src="/assets/figmaimages/figma_image_417_714.png" alt="Coffee image 1" />
          </figure>
          <figure class="img img-2" role="img" aria-label="Coffee image 2">
            <img src="/assets/figmaimages/figma_image_417_715.png" alt="Coffee image 2" />
          </figure>
          <figure class="img img-3" role="img" aria-label="Coffee image 3">
            <img src="/assets/figmaimages/figma_image_417_717.png" alt="Coffee image 3" />
          </figure>
          <figure class="img img-4" role="img" aria-label="Coffee image 4">
            <img src="/assets/figmaimages/figma_image_417_718.png" alt="Coffee image 4" />
          </figure>

          <figure class="img img-5" role="img" aria-label="Coffee image 5">
            <img src="/assets/figmaimages/figma_image_417_716.png" alt="Coffee image 5" />
          </figure>
          <figure class="img img-6" role="img" aria-label="Coffee image 6">
            <img src="/assets/figmaimages/figma_image_417_719.png" alt="Coffee image 6" />
          </figure>
        </section>
      </main>
    `;
    // Prefix any occurrences of /assets/ with PUBLIC_URL for CRA
    return html.replaceAll('/assets/', `${base}/assets/`);
  }, [base]);

  useEffect(() => {
    // Inject stylesheet for this screen
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${base}/assets/images-417-290.css`;
    link.setAttribute('data-images-417-290-css', 'true');
    document.head.appendChild(link);

    // Load the JS safely and call its init if exposed
    const script = document.createElement('script');
    script.src = `${base}/assets/images-417-290.js`;
    script.async = true;
    script.setAttribute('data-images-417-290-js', 'true');
    script.onload = () => {
      try {
        if (typeof window.initImages417290 === 'function') {
          window.initImages417290();
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Images screen init error:', e);
      }
    };
    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Failed to load Images screen script:', script.src);
    };
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const oldLink = document.querySelector('link[data-images-417-290-css="true"]');
      if (oldLink && oldLink.parentNode) oldLink.parentNode.removeChild(oldLink);
      const oldScript = document.querySelector('script[data-images-417-290-js="true"]');
      if (oldScript && oldScript.parentNode) oldScript.parentNode.removeChild(oldScript);
      const focusStyle = document.querySelector('style[data-images-417-290-focus="true"]');
      if (focusStyle && focusStyle.parentNode) focusStyle.parentNode.removeChild(focusStyle);
    };
  }, [base]);

  // Scope content to a unique root container to avoid global leakage
  return (
    <section
      id="images-417-290-root"
      aria-label="Images screen (417:290)"
      // Only inner content, no <html>, <head>, <body>
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default ImagesPage;
