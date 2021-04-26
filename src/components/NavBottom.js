import styles from "../styles/Nav.module.css";
import {
  BagIcon,
  HomeIcon,
  GridIcon,
  FileIcon,
} from "../components/shared/Icons";
import { NavLink } from "react-router-dom";

const NavItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/",
  },
  {
    icon: <GridIcon />,
    title: "Category",
    path: "/categories",
  },
  {
    icon: <BagIcon />,
    title: "Bag",
    path: "/purchase",
  },
  {
    icon: <FileIcon />,
    title: "Orders",
    path: "/orders",
  },
];

const NavBottom = () => {
  return (
    <div className={styles.nav_bottom_container}>
      <div className={styles.nav_bottom_flex}>
        {NavItems.map((item, i) => (
          <div key={i} className={styles.nav_bottom_item}>
            <NavLink to={item.path}>
              <div>{item.icon}</div>
              <small>{item.title}</small>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBottom;
