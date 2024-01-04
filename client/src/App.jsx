import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Uploads from "./Components/Uploads/Uploads";
// import RequestsForm from "./Components/Requests/RequestsForm";
import RequestTable from "./Components/Requests/RequestTable";
import CommentTable from "./Components/Comments/CommentTable";
// import CommentForm from "./Components/Comments/CommentForm";
// import Requests from "./Components/Requests/Requests";
import CommentsForm from "./Components/Comments/CommentForm";
// import Sample from "./Components/Sample/Sample";

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
      {/* <Routes>
        <Route path="/sample" element={<Sample/>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
