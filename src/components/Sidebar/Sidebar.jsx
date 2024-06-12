import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { assets } from "@/assets";
import { useSidebar } from "@/context/Context";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { sidebar } = useSidebar();

  return (
    <div className={cx("sidebar", `${sidebar ? "" : "small-sidebar"}`)}>
      <div className={cx("shortcut-links")}>
        <div className={cx("side-link")}>
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.game} alt="" />
          <p>Gaming</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.entertainment} alt="" />
          <p>entertainment</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className={cx("subscribed-list")}>
        <h3>Subscribed</h3>
        <div className={cx("side-link")}>
          <img src={assets.jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
