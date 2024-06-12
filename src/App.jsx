import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import { SidebarProvider } from "./context/Context";
const App = () => {
  return (
    <SidebarProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </SidebarProvider>
  );
};

export default App;
