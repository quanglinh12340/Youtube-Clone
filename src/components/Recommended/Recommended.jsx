import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames/bind";
import styles from "./Recommended.module.scss";
// import { assets } from "@/assets";
import { API_KEY, valueConverter } from "@/data";

const cx = classNames.bind(styles);

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={cx("recommended")}>
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className={cx("side-video-list")}
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} />
            <div className={cx("vid-info")}>
              <h4>{item.snippet.title} </h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
Recommended.propTypes = {
  categoryId: PropTypes.node.isRequired,
};
export default Recommended;
