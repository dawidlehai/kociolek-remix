import type { LinksFunction } from "@remix-run/node";
import type { ReactNode, RefObject } from "react";
import styles from "./Section.css";

interface Props {
  children: ReactNode;
  width?: "default" | "wide";
  background?: "none" | "main";
  className?: string;
  id?: string;
  observeRef?: RefObject<HTMLElement>;
}

export default function Section({
  children,
  width = "default",
  background = "none",
  className,
  id,
  observeRef,
}: Props) {
  const sectionClasses = `section ${
    background === "main" ? "background--main" : ""
  } ${className || ""}`;

  return (
    <section className={sectionClasses} id={id || ""} ref={observeRef}>
      <div className={`section__container container container--${width}`}>
        {children}
      </div>
    </section>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
