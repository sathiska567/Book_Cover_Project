import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Uploads from "./Components/Uploads/Uploads";
import RequestsForm from "./Components/Requests/RequestsForm";
import RequestTable from "./Components/Requests/RequestTable";
import CommentTable from "./Components/Comments/CommentTable";
import CommentForm from "./Components/Comments/CommentForm";

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
        <Route path="/requests" element={<RequestTable />} />
      </Routes>
      <Routes>
        <Route path="/comments" element={<CommentTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
