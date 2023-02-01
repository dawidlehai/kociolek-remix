import type { ReactNode, RefObject } from "react";

interface Props {
  children: ReactNode;
  width?: "default" | "wide";
  background?: "none" | "main";
  sectionClass?: string;
  containerClass?: string;
  id?: string;
  observeRef?: RefObject<HTMLElement>;
}

export default function Section({
  children,
  width = "default",
  background = "none",
  sectionClass,
  containerClass,
  id,
  observeRef,
}: Props) {
  const sectionClasses = `section ${
    background === "main" ? "background--main" : ""
  } ${sectionClass || ""}`;

  const containerClasses = `section__container container container--${width} ${
    containerClass || ""
  }`;

  return (
    <section className={sectionClasses} id={id || ""} ref={observeRef}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}
