import styles from "../styles/Nav.module.css";
import {
  BagIcon,
  HomeIcon,
  GridIcon,
  FileIcon,
} from "../components/shared/Icons";

const NavItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    icon: <GridIcon />,
    title: "Category",
  },
  {
    icon: <BagIcon />,
    title: "Bag",
  },
  {
    icon: <FileIcon />,
    title: "Orders",
  },
];

const NavBottom = () => {
  return (
    <div className={styles.nav_bottom_container}>
      <div className={styles.nav_bottom_flex}>
        {NavItems.map((item, i) => (
          <div key={i} className={styles.nav_bottom_item}>
            <div>{item.icon}</div>
            <small>{item.title}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBottom;
