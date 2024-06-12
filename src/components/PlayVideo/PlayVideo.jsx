import { PropTypes } from "prop-types";
import classNames from "classnames/bind";
import styles from "./PlayVideo.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const PlayVideo = ({ videoId }) => {
  return (
    <div className={cx("play-video")}>
      {/* <video src={assets.video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Best Youtube Channel To Learn Web Development </h3>
      <div className={cx("play-video-info")}>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={assets.like} />
            125
          </span>
          <span>
            <img src={assets.dislike} />2
          </span>
          <span>
            <img src={assets.share} />
            Share
          </span>
          <span>
            <img src={assets.save} />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className={cx("publisher")}>
        <img src={assets.jack} />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className={cx("vid-description")}>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className={cx("comment")}>
          <img src={assets.user_profile} />
          <div>
            <h3>
              Jack Nicholson
              <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi? Minima similique labore error doloribus, expedita voluptas
              deserunt sit asperiores voluptates consequatur consectetur autem
              reiciendis harum optio pariatur quaerat exercitationem.
            </p>
            <div className={cx("comment-action")}>
              <img src={assets.like} />
              <span>244</span>
              <img src={assets.dislike} />
            </div>
          </div>
        </div>
        <div className={cx("comment")}>
          <img src={assets.user_profile} />
          <div>
            <h3>
              Jack Nicholson
              <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi? Minima similique labore error doloribus, expedita voluptas
              deserunt sit asperiores voluptates consequatur consectetur autem
              reiciendis harum optio pariatur quaerat exercitationem.
            </p>
            <div className={cx("comment-action")}>
              <img src={assets.like} />
              <span>244</span>
              <img src={assets.dislike} />
            </div>
          </div>
        </div>
        <div className={cx("comment")}>
          <img src={assets.user_profile} />
          <div>
            <h3>
              Jack Nicholson
              <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi? Minima similique labore error doloribus, expedita voluptas
              deserunt sit asperiores voluptates consequatur consectetur autem
              reiciendis harum optio pariatur quaerat exercitationem.
            </p>
            <div className={cx("comment-action")}>
              <img src={assets.like} />
              <span>244</span>
              <img src={assets.dislike} />
            </div>
          </div>
        </div>
        <div className={cx("comment")}>
          <img src={assets.user_profile} />
          <div>
            <h3>
              Jack Nicholson
              <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi? Minima similique labore error doloribus, expedita voluptas
              deserunt sit asperiores voluptates consequatur consectetur autem
              reiciendis harum optio pariatur quaerat exercitationem.
            </p>
            <div className={cx("comment-action")}>
              <img src={assets.like} />
              <span>244</span>
              <img src={assets.dislike} />
            </div>
          </div>
        </div>
        <div className={cx("comment")}>
          <img src={assets.user_profile} />
          <div>
            <h3>
              Jack Nicholson
              <span>1 day ago</span>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              animi? Minima similique labore error doloribus, expedita voluptas
              deserunt sit asperiores voluptates consequatur consectetur autem
              reiciendis harum optio pariatur quaerat exercitationem.
            </p>
            <div className={cx("comment-action")}>
              <img src={assets.like} />
              <span>244</span>
              <img src={assets.dislike} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PlayVideo.propTypes = {
  videoId: PropTypes.node.isRequired,
};
export default PlayVideo;
