import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import PlayVideo from "@/components/PlayVideo";

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <div className={cx("play-container")}>
      <PlayVideo />
    </div>
  );
};

export default Video;
