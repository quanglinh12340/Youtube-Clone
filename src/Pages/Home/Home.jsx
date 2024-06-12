import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppContext } from "@/context/Context";
import Feed from "@/components/Feed";

const cx = classNames.bind(styles);

const Home = () => {
  const { sidebar } = useAppContext();

  return (
    <>
      <Sidebar />
      <div className={cx("container", `${sidebar ? "" : "large-container"}`)}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
