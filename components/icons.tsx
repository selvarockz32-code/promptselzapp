import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow-down"
  | "arrow-right"
  | "arrow-up-right"
  | "bookmark"
  | "briefcase"
  | "check"
  | "code"
  | "copy"
  | "graduation-cap"
  | "heart"
  | "lightbulb"
  | "menu"
  | "megaphone"
  | "pen"
  | "sparkles"
  | "x";

const paths: Record<IconName, ReactNode> = {
  "arrow-down": (
    <>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  bookmark: (
    <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-4-6 4z" />
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  code: (
    <>
      <path d="m8 17-5-5 5-5m8 10 5-5-5-5m-3 7 2-4" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="13" height="13" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </>
  ),
  "graduation-cap": (
    <>
      <path d="m2 10 10-5 10 5-10 5z" />
      <path d="M6 12v5c3.5 2.7 8.5 2.7 12 0v-5m4-2v6" />
    </>
  ),
  heart: (
    <path d="M20.8 8.7c0 5.2-8.8 11.3-8.8 11.3S3.2 13.9 3.2 8.7a4.7 4.7 0 0 1 8.8-2.3 4.7 4.7 0 0 1 8.8 2.3Z" />
  ),
  lightbulb: (
    <>
      <path d="M9 18h6m-5 3h4m-2-18a7 7 0 0 0-4 12.7c.8.6 1 1.2 1 2.3h6c0-1.1.2-1.7 1-2.3A7 7 0 0 0 12 3Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 13z" />
      <path d="m7 14 2 7h4l-2-6m10-7v10" />
    </>
  ),
  pen: (
    <>
      <path d="m12 20 9-9-5-5-9 9-1 6z" />
      <path d="m14 8 5 5M5 21h14" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" />
    </>
  ),
  x: (
    <>
      <path d="m18 6-12 12M6 6l12 12" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
