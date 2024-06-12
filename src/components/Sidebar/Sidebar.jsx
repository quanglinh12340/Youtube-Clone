import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { assets } from "@/assets";
import { useAppContext } from "@/context/Context";

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { sidebar, category, setCategory } = useAppContext();

  return (
    <div className={cx("sidebar", `${sidebar ? "" : "small-sidebar"}`)}>
      <div className={cx("shortcut-links")}>
        <div
          className={cx("side-link", `${category === 0 ? "active" : ""}`)}
          onClick={() => setCategory(0)}
        >
          <img src={assets.home} />
          <p>Home</p>
        </div>
        <div
          className={cx("side-link", `${category === 20 ? "active" : ""}`)}
          onClick={() => setCategory(20)}
        >
          <img src={assets.game} />
          <p>Gaming</p>
        </div>
        <div
          className={cx("side-link", `${category === 2 ? "active" : ""}`)}
          onClick={() => setCategory(2)}
        >
          <img src={assets.automobiles} />
          <p>Automobiles</p>
        </div>
        <div
          className={cx("side-link", `${category === 17 ? "active" : ""}`)}
          onClick={() => setCategory(17)}
        >
          <img src={assets.sports} />
          <p>Sports</p>
        </div>
        <div
          className={cx("side-link", `${category === 24 ? "active" : ""}`)}
          onClick={() => setCategory(24)}
        >
          <img src={assets.entertainment} />
          <p>Entertainment</p>
        </div>
        <div
          className={cx("side-link", `${category === 28 ? "active" : ""}`)}
          onClick={() => setCategory(28)}
        >
          <img src={assets.tech} />
          <p>Technology</p>
        </div>
        <div
          className={cx("side-link", `${category === 10 ? "active" : ""}`)}
          onClick={() => setCategory(10)}
        >
          <img src={assets.music} />
          <p>Music</p>
        </div>
        <div
          className={cx("side-link", `${category === 22 ? "active" : ""}`)}
          onClick={() => setCategory(22)}
        >
          <img src={assets.blogs} />
          <p>Blogs</p>
        </div>
        <div
          className={cx("side-link", `${category === 25 ? "active" : ""}`)}
          onClick={() => setCategory(25)}
        >
          <img src={assets.news} />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className={cx("subscribed-list")}>
        <h3>Subscribed</h3>
        <div className={cx("side-link")}>
          <img src={assets.jack} />
          <p>PewDiePie</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.simon} />
          <p>MrBeast</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.tom} />
          <p>Justin Bieber</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.megan} />
          <p>5-Minute Crafts</p>
        </div>
        <div className={cx("side-link")}>
          <img src={assets.cameron} />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
