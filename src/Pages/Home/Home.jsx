import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useSidebar } from "@/context/Context";
import Feed from "@/components/Feed";

const cx = classNames.bind(styles);

const Home = () => {
  const { sidebar } = useSidebar();

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
