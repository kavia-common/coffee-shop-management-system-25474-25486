import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.css';

/**
 * PUBLIC_INTERFACE
 * AboutPage is a native React implementation of the static Figma screen (442:3) "About Me".
 * It preserves pixel-accurate layout by using absolute positioning and fixed dimensions
 * mirroring the original assets while scoping styles via CSS modules.
 *
 * Image paths are preserved as /assets/figmaimages/... per request notes.
 */

// Subcomponents

// PUBLIC_INTERFACE
export function Hero() {
  /** Hero section with title, description, and logo mark */
  return (
    <section className={styles.headlineRow} aria-labelledby="headline-title">
      <div className={styles.headlineText}>
        <h1 id="headline-title" className={styles.h1}>About Me</h1>
        <p className={styles.h1Desc}>
          Hi, my name is B, and I am a product designer at NAM Design. I have been working in this field for more than four years, and I hope that my resources can help you with your design process. Cheers!
        </p>
      </div>
      <figure className={styles.logoFigure} aria-label="Logo NAM Design">
        <img
          className={styles.logoImg}
          src="/assets/figmaimages/figma_image_442_27.png"
          alt="NAM Design logo mark"
          decoding="async"
          loading="eager"
        />
      </figure>
    </section>
  );
}

// PUBLIC_INTERFACE
export function Breadcrumb() {
  /** Breadcrumb/top metadata row */
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <div className={styles.breadcrumbLeft} role="group" aria-label="Breadcrumb path">
        <p className={styles.typo97} style={{ left: 0, top: 1, width: 96, height: 22 }} aria-label="Studio name">
          Nam Design
        </p>
        <div className={styles.arrow} role="img" aria-label="arrow right">
          <img
            className={styles.arrowImg}
            src="/assets/figmaimages/figma_image_442_32.png"
            alt="Arrow right"
            decoding="async"
            loading="eager"
          />
        </div>
        <p
          className={styles.typo97}
          style={{ left: 128, top: 1, width: 78, height: 22 }}
          aria-current="page"
        >
          About Me
        </p>
      </div>
      <p className={`${styles.typo97} ${styles.handleRight}`}>@namdesign</p>
    </nav>
  );
}

// PUBLIC_INTERFACE
export function SocialLinks() {
  /** Support section with Buy Me A Coffee link */
  return (
    <section className={styles.support} aria-labelledby="support-title">
      <div className={styles.supportText}>
        <h2 id="support-title" className={styles.h2}>Ways to Support Me</h2>
        <p className={styles.supportDesc}>
          If you appreciate my work, please consider supporting me below.
        </p>
      </div>

      <div className={styles.bmacRow} role="group" aria-labelledby="bmac-title">
        <div className={styles.bmacLogo} role="img" aria-label="Buy Me A Coffee logo">
          <div className={styles.bmacLogoBg} />
          <img
            className={styles.bmacLogoIcon}
            src="/assets/figmaimages/figma_image_442_17.png"
            alt="Coffee cup icon"
            decoding="async"
            loading="eager"
          />
        </div>

        <div className={styles.bmacDetail}>
          <div className={styles.bmacTextRow}>
            <h3 id="bmac-title" className={styles.h3}>Buy Me A Coffee</h3>
            <span className={styles.pointing} aria-hidden="true">👇</span>
          </div>
          <p className={styles.bmacUrl}>
            <a
              href="https://www.buymeacoffee.com/namdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.buymeacoffee.com/namdesign
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
export function Illustration() {
  /** Right-side illustration image */
  return (
    <figure className={styles.illustration} aria-label="Saly 39 illustration">
      <img
        className={styles.illustrationImg}
        src="/assets/figmaimages/figma_image_442_9.png"
        alt="Saly 39 character illustration"
        decoding="async"
        loading="eager"
      />
    </figure>
  );
}

// PUBLIC_INTERFACE
export function Credits() {
  /** Footer credits */
  return (
    <footer className={styles.credits} aria-label="Credits">
      <p className={styles.typo97}>Create with</p>
      <span className={styles.typo98} role="img" aria-label="heart">🖤</span>
      <p className={styles.typo97}>by NAM Design</p>
    </footer>
  );
}

// PUBLIC_INTERFACE
function AboutPage({ enableFocusRing = true }) {
  /**
   * Main page container combining all sections.
   * Adds a keyboard focus ring for links/buttons within this page using a scoped style element.
   */
  useEffect(() => {
    if (!enableFocusRing) return undefined;
    const style = document.createElement('style');
    style.setAttribute('data-about-focus', 'true');
    style.textContent = `
      a:focus, button:focus {
        outline: 2px solid #2563EB;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style && style.parentNode) style.parentNode.removeChild(style);
    };
  }, [enableFocusRing]);

  return (
    <main className={styles.screen} role="main" aria-labelledby="headline-title">
      <div className={styles.stripe} aria-hidden="true" />
      <Breadcrumb />
      <Hero />
      <SocialLinks />
      <Illustration />
      <Credits />
    </main>
  );
}

AboutPage.propTypes = {
  enableFocusRing: PropTypes.bool,
};

export default AboutPage;
