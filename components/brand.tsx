import Image from "next/image";

export function BrandMark() {
  return (
    <span aria-hidden="true" className="brand-mark">
      <Image
        alt=""
        height={40}
        src="/promptselz-icon.jpg"
        width={40}
      />
    </span>
  );
}

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      aria-label="PromptSelz home"
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#home"
    >
      <BrandMark />
      <span className="brand-name">
        Prompt<span>Selz</span>
      </span>
    </a>
  );
}
