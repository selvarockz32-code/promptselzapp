"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { PLAY_STORE_URL } from "@/components/store-link";

const REDIRECT_DELAY_MS = 3000;

export function RedirectNotice() {
  const [secondsRemaining, setSecondsRemaining] = useState(4);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSecondsRemaining((seconds) => Math.max(seconds - 1, 0));
    }, 1000);
    const timeoutId = window.setTimeout(() => {
      window.location.replace(PLAY_STORE_URL);
    }, REDIRECT_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <aside aria-live="polite" className="redirect-notice">
      <p>
        Taking you to Google Play in{" "}
        <strong>
          {secondsRemaining} second{secondsRemaining === 1 ? "" : "s"}
        </strong>
        .
      </p>
      <a href={PLAY_STORE_URL}>
        Go to Google Play now
        <Icon name="arrow-up-right" size={15} />
      </a>
    </aside>
  );
}
