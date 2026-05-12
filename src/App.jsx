// Root application component — replace this with your app's entry UI
import "./App.css";
import heroImage from "./assets/hero.jpg";
import storyImage from "./assets/story.jpg";
import interiorImage from "./assets/interior.jpg";
import menuBeansImage from "./assets/menu-1.jpg";
import menuPourImage from "./assets/menu-2.jpg";

const navLinks = [
  { label: "STORY", href: "#story" },
  { label: "MENU", href: "#menu" },
  { label: "ATMOSPHERE", href: "#atmosphere" },
  { label: "LOCATIONS", href: "#visit" },
];

const heroStats = [
  { value: "7 DAYS", label: "Open weekly" },
  { value: "12 ROASTS", label: "In rotation" },
  { value: "MANHATTAN", label: "Born here" },
];

const menuCards = [
  {
    eyebrow: "POUR OVER",
    title: "Midnight Espresso",
    description:
      "our signature roast, featuring a rich, velvety body and a dense, golden crema.",
    image: menuPourImage,
    alt: "A close-up espresso extraction and latte art in warm light",
    size: "feature",
  },
  {
    eyebrow: "SINGLE ORIGIN",
    title: "Cappuccino",
    description:
      "Silky milk, layered foam, and a calm finish that settles softly.",
    image: menuBeansImage,
    alt: "A dense field of roasted coffee beans",
    size: "stack-top",
  },
  {
    eyebrow: "HOUSE BLEND",
    title: "Pour Over",
    description: "Bright acidity, floral aroma, and a transparent finish.",
    image: storyImage,
    alt: "A circular table of coffee cups arranged in a quiet ritual",
    size: "stack-bottom",
  },
];

const footerLinks = ["JOURNAL", "WHOLESALE", "CAREERS", "PRIVACY"];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon-arrow">
      <path
        d="M5 12h13m0 0-6-6m6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MediaFrame({
  src,
  alt,
  aspect = "16 / 10",
  eager = false,
  className = "",
}) {
  return (
    <figure
      className={`media-frame ${className}`.trim()}
      style={{ aspectRatio: aspect }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#home" aria-label="Cafuno home">
            CAFUNO
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="button button--solid topbar__cta" href="#visit">
            Reserve
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">CAFUNO / MANHATTAN ROASTERY</p>
              <h1>The Quiet Art of Espresso.</h1>
            </div>

            <aside className="hero__aside">
              <p className="hero__lede">
                A sensory sanctuary born in Manhattan, where Scandinavian
                precision meets industrial warmth.
              </p>
            </aside>

            <div className="hero__actions">
              <a className="button button--solid" href="#menu">
                Explore the menu
              </a>
              <a className="button button--ghost" href="#story">
                Learn our process
              </a>
            </div>

            <div className="hero__stats" aria-label="Key details">
              {heroStats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                </article>
              ))}
            </div>

            <MediaFrame
              src={heroImage}
              alt="Hands raising espresso cups over a warm wooden table"
              eager
              aspect="16 / 7"
              className="hero__media"
            />
          </div>
        </section>

        <section className="story section section--split" id="story">
          <div className="container story__grid">
            <MediaFrame
              src={storyImage}
              alt="A round table of coffee cups arranged in a quiet ritual"
              aspect="4 / 5"
              className="story__media"
            />

            <div className="story__content">
              <p className="section-label">STORY</p>
              <h2>Crafting the Momentum of Silence.</h2>
              <p>
                Cafuno was established with a singular vision: to strip away the
                noise of the city and focus on the fundamental purity of the
                bean. Our process is a dialogue between the roaster and the
                harvest.
              </p>
              <a className="inline-link" href="#menu">
                Learn our process
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="menu section" id="menu">
          <div className="container menu__inner">
            <div className="section-head">
              <div>
                <p className="section-label">CURATED SELECTION</p>
                <h2>Seasonal signatures, dialed with restraint.</h2>
              </div>
              <p className="section-note">
                Season 01 — Spring. Each cup is balanced for clarity, texture,
                and a long finish.
              </p>
            </div>

            <div className="menu-grid">
              <article className="menu-card menu-card--feature">
                <MediaFrame
                  src={menuCards[0].image}
                  alt={menuCards[0].alt}
                  aspect="16 / 11"
                  className="menu-card__image"
                />
                <div className="menu-card__content">
                  <p className="menu-card__eyebrow">{menuCards[0].eyebrow}</p>
                  <h3>{menuCards[0].title}</h3>
                  <p>{menuCards[0].description}</p>
                </div>
              </article>

              <article className="menu-card menu-card--stack-top">
                <MediaFrame
                  src={menuCards[1].image}
                  alt={menuCards[1].alt}
                  aspect="4 / 4"
                  className="menu-card__image"
                />
                <div className="menu-card__content menu-card__content--compact">
                  <p className="menu-card__eyebrow">{menuCards[1].eyebrow}</p>
                  <h3>{menuCards[1].title}</h3>
                  <p>{menuCards[1].description}</p>
                </div>
              </article>

              <article className="menu-card menu-card--stack-bottom">
                <MediaFrame
                  src={menuCards[2].image}
                  alt={menuCards[2].alt}
                  aspect="4 / 4"
                  className="menu-card__image"
                />
                <div className="menu-card__content menu-card__content--compact">
                  <p className="menu-card__eyebrow">{menuCards[2].eyebrow}</p>
                  <h3>{menuCards[2].title}</h3>
                  <p>{menuCards[2].description}</p>
                </div>
              </article>

              <a className="menu-card menu-card--cta" href="#visit">
                <span className="menu-card__cta-text">Explore Full Menu</span>
                <span className="menu-card__cta-icon" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="atmosphere section" id="atmosphere">
          <div className="container atmosphere__grid">
            <div className="atmosphere__rail">
              <MediaFrame
                src={heroImage}
                alt="Latte cups held together above a wooden table"
                aspect="4 / 5"
                className="atmosphere__portrait"
              />

              <div className="atmosphere__copy">
                <p className="section-label">ATMOSPHERE</p>
                <h2>Designed for negative space and material integrity.</h2>
                <p>
                  Designed by Studio Nord, our spaces are a study in negative
                  space and material integrity.
                </p>
              </div>
            </div>

            <MediaFrame
              src={interiorImage}
              alt="A warm coffee bar interior with pendant lights and espresso tools"
              aspect="16 / 9"
              className="atmosphere__wide"
            />
          </div>
        </section>
      </main>

      <footer className="footer section" id="visit">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#home">
              CAFUNO
            </a>
            <p>© {currentYear} Cafuno Artisan Coffee. Born in Manhattan.</p>
          </div>

          <nav className="footer__nav" aria-label="Secondary">
            {footerLinks.map((link) => (
              <a key={link} href="#home">
                {link}
              </a>
            ))}
          </nav>

          <div className="footer__visit">
            <p className="footer__label">VISIT</p>
            <p>123 Canal Street</p>
            <p>Manhattan, New York</p>
            <p>Daily 7am — 7pm</p>
          </div>

          <div className="footer__socials" aria-label="Social links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              INSTAGRAM <ArrowIcon />
            </a>
            <a href="mailto:hello@cafuno.co">
              EMAIL <ArrowIcon />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              MAPS <ArrowIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
