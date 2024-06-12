import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { assets } from "@/assets";
import { useAppContext } from "@/context/Context";
const cx = classNames.bind(styles);

const Navbar = () => {
  const { sidebar, setSidebar } = useAppContext();

  return (
    <nav className={cx("flex-div")}>
      <div className={cx("nav-left", "flex-div")}>
        <img
          className={cx("menu-icon")}
          src={assets.menu}
          onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
        />
        <img className={cx("logo")} src={assets.logo} />
      </div>
      <div className={cx("nav-middle", "flex-div")}>
        <div className={cx("search-box", "flex-div")}>
          <input type="text" placeholder="Search" />
          <img src={assets.search} />
        </div>
      </div>
      <div className={cx("nav-right", "flex-div")}>
        <img src={assets.upload} />
        <img src={assets.more} />
        <img src={assets.notification} />
        <img src={assets.jack} className={cx("user-icon")} />
      </div>
    </nav>
  );
};

export default Navbar;
