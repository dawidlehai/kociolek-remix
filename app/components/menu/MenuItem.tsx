interface MenuItemProps {
  title: string;
  desc: string;
  link: string;
  linkText: string;
  color?: "orange" | "marine";
}

export default function MenuItem({
  title,
  desc,
  link,
  linkText,
  color,
}: MenuItemProps) {
  return (
    <article className={"menu-item" + (color ? " menu-item--" + color : "")}>
      <h3>{title}</h3>
      <p className="menu-item__desc">{desc}</p>
      <a href={link} className="button button--white">
        {linkText}
      </a>
    </article>
  );
}
