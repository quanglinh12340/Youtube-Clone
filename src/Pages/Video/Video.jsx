import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import PlayVideo from "@/components/PlayVideo";
import Recommended from "@/components/Recommended";

const cx = classNames.bind(styles);

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className={cx("play-container")}>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
