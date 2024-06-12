import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import PlayVideo from "@/components/PlayVideo";
import Recommended from "@/components/Recommended";

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <div className={cx("play-container")}>
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
