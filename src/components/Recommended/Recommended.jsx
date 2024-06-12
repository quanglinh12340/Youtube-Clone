import classNames from "classnames/bind";
import styles from "./Recommended.module.scss";
import { assets } from "@/assets";
const cx = classNames.bind(styles);

const Recommended = () => {
  return (
    <div className={cx("recommended")}>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail1} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail2} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail3} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail4} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail5} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail6} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail7} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
      <div className={cx("side-video-list")}>
        <img src={assets.thumbnail8} alt="" />
        <div className={cx("vid-info")}>
          <h4>Best channel that help you to be a web developer </h4>
          <p>GreatStack</p>
          <p>199K Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
