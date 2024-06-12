import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Feed.module.scss";
import { useAppContext } from "@/context/Context";
import { API_KEY, valueConverter } from "@/data";

const cx = classNames.bind(styles);

const Feed = () => {
  const { category } = useAppContext();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className={cx("feed")}>
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className={cx("card")}
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} Views &bull;
              {moment(item.snippet.publishedAt).fromNow()}{" "}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
