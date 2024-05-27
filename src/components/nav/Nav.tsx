import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { navItems } from "../../lib/navData";

interface activeItemProps {
  href: string;
  tags: string;
  title: string;
}

const Navigation = ({
  activeItem,
}: {
  activeItem: activeItemProps | undefined;
}) => {
  return (
    <section className={style.nav}>
      <ul className={style.navItems}>
        {navItems.map((el, id) => (
          <li
            key={id}
            className={`${style.navItem} ${
              el.title === activeItem?.title ? style.active : ""
            }`}
          >
            <Link to={el.href}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navigation;
