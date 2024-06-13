import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import moment from "moment";
import classNames from "classnames/bind";
import styles from "./PlayVideo.module.scss";
import { assets } from "@/assets";
import { API_KEY, valueConverter } from "@/data";

const cx = classNames.bind(styles);

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comment, setComment] = useState([]);

  const fetchVideoData = async () => {
    //Fetching Video Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //Fetching channel Data
    if (apiData) {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      await fetch(channelData_url)
        .then((response) => response.json())
        .then((data) => setChannelData(data.items[0]));
    }

    //Fetching Comment Data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((response) => response.json())
      .then((data) => setComment(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className={cx("play-video")}>
      {/* <video src={assets.video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData?.snippet?.title || "Title here"} </h3>
      <div className={cx("play-video-info")}>
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} Views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={assets.like} />
            {apiData ? valueConverter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={assets.dislike} />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData ? channelData.statistics.likeCount : "1M"} Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className={cx("vid-description")}>
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Description"}
        </p>
        <hr />
        <h4>
          {apiData ? valueConverter(apiData.statistics.commentCount) : 130}{" "}
          Comment
        </h4>
        {comment.map((item, index) => {
          return (
            <div className={cx("comment")} key={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>
                    {item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  </span>
                </h3>
                <p>
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </p>
                <div className={cx("comment-action")}>
                  <img src={assets.like} />
                  <span>
                    {valueConverter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={assets.dislike} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
PlayVideo.propTypes = {
  videoId: PropTypes.node.isRequired,
};
export default PlayVideo;
