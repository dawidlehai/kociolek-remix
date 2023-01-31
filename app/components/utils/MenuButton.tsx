import React from "react";
import { List, X } from "phosphor-react";

interface Props {
  ariaLabel: string;
  className: string;
  type: "open" | "close";
  onClick: React.MouseEventHandler;
}

export default function MenuButton({
  ariaLabel,
  className,
  type,
  onClick,
}: Props) {
  return (
    <button aria-label={ariaLabel} className={className} onClick={onClick}>
      {type === "open" ? <List weight="bold" /> : <X weight="bold" />}
    </button>
  );
}
