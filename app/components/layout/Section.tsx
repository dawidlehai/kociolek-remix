import type { ReactNode, RefObject } from "react";

interface Props {
  children: ReactNode;
  width?: "default" | "wide";
  background?: "none" | "main";
  sectionClass?: string;
  containerClass?: string;
  id?: string;
  observeRef?: RefObject<HTMLElement>;
  pictureElement?: ReactNode;
}

export default function Section({
  children,
  width = "default",
  background = "none",
  sectionClass,
  containerClass,
  id,
  observeRef,
  pictureElement,
}: Props) {
  const sectionClasses = `section ${
    background === "main" ? "background--main" : ""
  } ${sectionClass || ""}`;

  const containerClasses = `section__container container container--${width} ${
    containerClass || ""
  }`;

  return (
    <section className={sectionClasses} id={id || ""} ref={observeRef}>
      {pictureElement || ""}
      <div className={containerClasses}>{children}</div>
    </section>
  );
}
