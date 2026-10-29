import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { StoreLink } from "@/components/store-link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <Brand />
        <span className="not-found-code">404</span>
        <h1>Looks like this page wandered off.</h1>
        <p>
          The link may be out of date, but there are plenty of prompts waiting
          on the home page.
        </p>
        <div className="not-found-actions">
          <Link className="button button-outline" href="/">
            <Icon name="arrow-right" size={17} />
            Back to home
          </Link>
          <StoreLink />
        </div>
      </div>
    </main>
  );
}
