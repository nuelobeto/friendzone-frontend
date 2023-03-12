import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
