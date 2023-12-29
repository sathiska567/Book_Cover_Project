import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Uploads from "./Components/Uploads/Uploads";
import Requests from "./Components/Requests/Requests";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createEvent" element={<CreateEvent />} />
      </Routes>
      <Routes>
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
      <Routes>
        <Route path="/requests" element={<Requests />} />
      </Routes>
      <Routes>
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
