import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Feed.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Feed = () => {
  return (
    <div className={cx("feed")}>
      <Link to={`video/20/4521`} className={cx("card")}>
        <img src={assets.thumbnail1} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </Link>
      <div className={cx("card")}>
        <img src={assets.thumbnail2} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail3} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail4} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail5} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail6} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail7} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail8} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail1} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail2} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail3} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail4} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail5} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail6} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail7} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
      <div className={cx("card")}>
        <img src={assets.thumbnail8} />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatstack</h3>
        <p>15k views &bull; 2 days ago </p>
      </div>
    </div>
  );
};

export default Feed;
