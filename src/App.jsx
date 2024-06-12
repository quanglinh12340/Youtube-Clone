import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import { AppProvider } from "./context/Context";
const App = () => {
  return (
    <AppProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </AppProvider>
  );
};

export default App;
