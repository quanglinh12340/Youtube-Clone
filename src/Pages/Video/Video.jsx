import classNames from "classnames/bind";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

const Video = () => {
  return <div className={cx("play-container")}>Video</div>;
};

export default Video;
