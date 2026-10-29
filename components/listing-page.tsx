import Image from "next/image";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { RedirectNotice } from "@/components/redirect-notice";
import { PLAY_STORE_URL, StoreLink } from "@/components/store-link";

const appBenefits = [
  {
    icon: "sparkles" as const,
    title: "Ready-made prompts",
    description:
      "Explore prompts for creativity, productivity, learning, and more.",
  },
  {
    icon: "copy" as const,
    title: "Copy & share",
    description: "Take a prompt with you or share it with someone else.",
  },
  {
    icon: "bookmark" as const,
    title: "Saved prompts, offline",
    description: "Keep saved prompts close, even when you are offline.",
  },
  {
    icon: "heart" as const,
    title: "Simple to use",
    description: "A clean, easy-to-use app made to keep things straightforward.",
  },
];

const uses = [
  "Writing assistance",
  "Content creation",
  "Coding help",
  "Learning & education",
  "Idea generation",
];

const faq = [
  {
    question: "What is PromptSelz?",
    answer:
      "PromptSelz is an Android app with ready-made AI prompts for creativity, productivity, learning, and other use cases. You can use those prompts with compatible AI tools such as ChatGPT.",
  },
  {
    question: "How do I download PromptSelz?",
    answer:
      "Open the Google Play listing from any Get the app button on this page, then follow Google Play's install steps on your Android device.",
  },
  {
    question: "How can I use AI prompts?",
    answer:
      "Choose a prompt, copy or share it, and use it with a compatible AI tool. You can adapt the prompt to suit what you are working on.",
  },
  {
    question: "Can I save prompts?",
    answer:
      "Yes. The app listing says saved prompts are available offline, so you can keep useful prompts for later.",
  },
  {
    question: "Does PromptSelz work offline?",
    answer:
      "Saved prompts are described as available offline. The listing does not say that every app feature works without an internet connection.",
  },
];

function ListingHeader() {
  return (
    <header className="listing-header">
      <div className="listing-header-inner">
        <Brand />
        <nav aria-label="Page navigation" className="listing-nav">
          <a href="#about">About this app</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </nav>
        <StoreLink className="button button-primary header-download">
          Get the app
        </StoreLink>
      </div>
    </header>
  );
}

function AppIconArtwork() {
  return (
    <div
      aria-label="Official PromptSelz app icon"
      className="app-icon-art"
      role="img"
    >
      <Image
      alt=""
      className="app-icon-image"
      height={480}
      priority
      src="/promptselz-icon.jpg"
      width={480}
      />
    </div>
  );
}

function AppPreview() {
  const screenshots = [
    {
      src: "/screenshots/promptselz-01-copy-share.jpg",
      alt: "PromptSelz prompt detail with copy and share, shown alongside a pop-art prompt",
    },
    {
      src: "/screenshots/promptselz-02-gallery.jpg",
      alt: "PromptSelz gallery screen displaying a grid of creative prompt examples",
    },
    {
      src: "/screenshots/promptselz-03-interface.jpg",
      alt: "PromptSelz home screen with trending prompts and a top prompts list",
    },
    {
      src: "/screenshots/promptselz-04-favorites.jpg",
      alt: "PromptSelz favorites screen showing saved prompt examples",
    },
  ];

  return (
    <section aria-labelledby="preview-title" className="listing-preview">
      <div className="section-title-row">
      <div>
        <h2 id="preview-title">A closer look</h2>
        <p>Real screenshots from the PromptSelz Android app.</p>
      </div>
      <span className="asset-notice">
        <Icon name="check" size={15} />
        Official app screenshots
      </span>
      </div>
      <div className="preview-gallery">
      {screenshots.map((screenshot, index) => (
        <figure className="screenshot-card" key={screenshot.src}>
          <Image
            alt={screenshot.alt}
            className="app-screenshot"
            height={592}
            loading={index === 0 ? "eager" : "lazy"}
            src={screenshot.src}
            width={273}
          />
          <figcaption className="screenshot-caption">
            Screenshot {index + 1}
          </figcaption>
        </figure>
      ))}
      </div>
    </section>
  );
}

function AboutApp() {
  return (
    <section aria-labelledby="about-title" className="listing-section" id="about">
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Discover more</span>
          <h2 id="about-title">About this app</h2>
        </div>
      </div>
      <div className="about-description">
        <p>
          PromptSelz is designed to help you find useful AI prompts for
          creativity, productivity, and learning. Browse ready-made prompts,
          then copy or share one to use with a compatible AI tool.
        </p>
        <p>
          Save prompts you want to revisit. Your saved prompts are available
          offline, so the ideas you have collected are still close at hand.
        </p>
        <p>
          Whether you are learning, creating, coding, or looking for a new
          perspective, PromptSelz offers a simple place to start.
        </p>
      </div>
      <div aria-label="Examples of AI prompt use cases" className="use-case-list">
        <h3>Ideas for what you can do with prompts</h3>
        <p className="use-case-disclaimer">
          These are examples from the app listing, not a confirmed list of
          categories inside the app.
        </p>
        <div className="use-case-chips">
          {uses.map((use) => (
            <span className="use-case-chip" key={use}>
              {use}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureList() {
  return (
    <section
      aria-labelledby="features-title"
      className="listing-section feature-list-section"
      id="features"
    >
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Made for everyday ideas</span>
          <h2 id="features-title">What you can do</h2>
        </div>
      </div>
      <div className="benefit-grid">
        {appBenefits.map((benefit, index) => (
          <article className="benefit-card" key={benefit.title}>
            <span className={`benefit-icon benefit-icon-${index + 1}`}>
              <Icon name={benefit.icon} size={21} />
            </span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="listing-section faq-section" id="faq">
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Helpful details</span>
          <h2 id="faq-title">Frequently asked questions</h2>
        </div>
      </div>
      <div className="faq-list">
        {faq.map((item, index) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span className="faq-number">0{index + 1}</span>
              <span>{item.question}</span>
              <span aria-hidden="true" className="faq-plus" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ListingPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ListingHeader />
      <main className="listing-main" id="main-content">
        <RedirectNotice />
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <a href="#home">Apps</a>
          <Icon name="arrow-right" size={13} />
          <span id="home">PromptSelz</span>
        </nav>

        <section aria-labelledby="app-name" className="app-summary">
          <AppIconArtwork />
          <div className="app-identity">
            <span className="eyebrow">Android app</span>
            <h1 id="app-name">PromptSelz – AI Prompt</h1>
            <p className="app-tagline">
              Discover useful AI prompts for creativity, productivity, and
              learning.
            </p>
            <div aria-label="App highlights" className="app-highlights">
              <span>Ready-made prompts</span>
              <span>Copy &amp; share</span>
              <span>Saved prompts offline</span>
            </div>
            <div className="summary-actions">
              <StoreLink className="button button-primary button-large" />
              <a className="button button-outline button-large" href="#about">
                About this app
                <Icon name="arrow-down" size={16} />
              </a>
            </div>
            <p className="app-availability">Available on Google Play for Android</p>
          </div>
        </section>

        <AppPreview />
        <FeatureList />
        <AboutApp />
        <FAQ />

        <section aria-label="Download PromptSelz" className="bottom-download">
          <div className="bottom-download-icon">
            <Icon name="sparkles" size={22} />
          </div>
          <div>
            <h2>Find your next useful prompt.</h2>
            <p>Get PromptSelz on Google Play for Android.</p>
          </div>
          <StoreLink className="button button-primary" />
        </section>
      </main>
      <footer className="listing-footer">
        <div className="listing-footer-inner">
          <Brand footer />
          <p>
            PromptSelz – AI Prompt
            <span> · </span>
            <a
              href={PLAY_STORE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View on Google Play
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
