import { Icon } from "@/components/icons";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.selva.promptselz&utm_source=chatgpt.com";

type StoreLinkProps = {
  children?: string;
  className?: string;
  icon?: boolean;
};

export function StoreLink({
  children = "Get it on Google Play",
  className = "button button-primary",
  icon = true,
}: StoreLinkProps) {
  return (
    <a
      className={className}
      href={PLAY_STORE_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon && <Icon aria-hidden="true" name="arrow-up-right" size={18} />}
      <span>{children}</span>
    </a>
  );
}
